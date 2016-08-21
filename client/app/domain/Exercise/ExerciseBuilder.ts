import {Exercise} from "./Exercise";

export class ExerciseBuilder {

    constructor(public id?: number, public title?: string, public description?: string, public lines = new Array<string>()) { }

    build(): Exercise {
        return new Exercise(this.id, this.title, this.description, this.lines);
    }

    static fromExercise(exercise: Exercise): ExerciseBuilder {
        return new ExerciseBuilder(exercise.id, exercise.title, exercise.description, exercise.lines);
    }

    static fromParsedJSON(parsedJSON: any): Exercise {
        return new Exercise(parsedJSON._id, parsedJSON._title, parsedJSON._description, parsedJSON._lines);
    }

}
