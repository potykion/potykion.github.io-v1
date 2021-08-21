namespace GrammarExercises {
  export interface TocItem {
    topic: string;
    slug: string;
    bookPage: number;
    pdfPage: number;
    startExercise: number;
    endExercise: number;
  }

  export interface Exercise {
    rules?: string;
    exercise_number: number;
    exercise_text: string;
    tasks: Array<Task | string>;
  }

  export interface Task {
    exercise_text?: string;
    tasks: string[];
  }

  export interface Answer {
    exercise_number: number;
    tasks: Array<Task | string>;
  }


}
