import {Chapter} from "./Chapter";
import {Exercise} from "../Exercise/Exercise";
import {ExerciseBuilder} from "../Exercise/ExerciseBuilder";


export class ChapterBuilder {

    constructor(public id?: number, public title?: string, public description?: string, public exercises = new Array<Exercise>()) {
    }

    build(): Chapter {
        let chapter = new Chapter(this.id, this.title, this.description, this.exercises);
        return chapter;
    }

    static fromChapter(chapter: Chapter) {
        return new ChapterBuilder(chapter.id, chapter.title, chapter.description, chapter.exercises);
    }

    static fromParsedJSON(parsedJSON: any): Chapter {

        let exercises: Array<any> = parsedJSON._exercises.map(ex => ExerciseBuilder.fromParsedJSON(ex));

        return new Chapter(parsedJSON._id, parsedJSON._title, parsedJSON._description, parsedJSON._exercises);


    }

}
