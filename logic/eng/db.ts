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
