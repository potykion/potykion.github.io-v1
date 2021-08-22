export class DoneExerciseRepo {
  constructor(
    private _localStorage: Storage,
  ) {
  }

  _doneExercisesKey = "doneExercises";

  doExercise(exerciseNumber: number) {
    this._localStorage.setItem(this._doneExercisesKey, JSON.stringify([...this._getDoneExercises(), exerciseNumber]));
  }

  undoExercise(exerciseNumber: number) {
    this._localStorage.setItem(this._doneExercisesKey, JSON.stringify([...this._getDoneExercises().filter(en => en !== exerciseNumber)]));
  }

  isExerciseDone(exerciseNumber: number): boolean {
    return (this._getDoneExercises()).includes(exerciseNumber);
  }

  _getDoneExercises() {
    return JSON.parse(this._localStorage.getItem(this._doneExercisesKey) ?? "[]") as number[];
  }
}


/**
 * Класс, который записывает в localStorage введенный в упражнении текст
 *
 * Структура сохраняемых данных:
 * {100: {"There are _ pictures in the book.": "There are some pictures in the book."}}
 *
 */
export class ExerciseProgressRepo {
  constructor(
    private _localStorage: Storage,
  ) {
  }

  private _keyPrefix = "exercise_";

  private _buildKey(exNumber: number) {
    return `${this._keyPrefix}${exNumber}`;
  }

  save(exerciseNumber: number, taskKey: string, taskContent: string) {
    this._localStorage.setItem(
      this._buildKey(exerciseNumber),
      JSON.stringify({
        ...this._tryGetTasks(exerciseNumber),
        [taskKey]: taskContent,
      })
    );
  }

  reset(exerciseNumber: number) {
    this._localStorage.removeItem(this._buildKey(exerciseNumber));
  }

  tryGetTask(exNumber: number, taskKey: string): string | undefined {
    // @ts-ignore
    return this._tryGetTasks(exNumber)[taskKey];
  }

  private _tryGetTasks(exNumber: number): object {
    return JSON.parse(this._localStorage.getItem(this._buildKey(exNumber)) ?? "{}");
  }
}
