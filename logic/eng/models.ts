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
    exerciseNumber: number;
    exerciseText: string;
    tasks: Array<Task | string>;
    done?: boolean;
  }

  export interface Task {
    exerciseText?: string;
    tasks: string[];
  }

  export interface Answer {
    exerciseNumber: number;
    tasks: Array<Task | string>;
  }


}
