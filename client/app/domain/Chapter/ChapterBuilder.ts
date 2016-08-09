import {Chapter} from "./Chapter";
import {Exercise} from "../Exercise/Exercise";


export class ChapterBuilder {

    constructor(public id: number, public title: string, public description: string, public exercises = new Array<Exercise>()) {
    }

    build(): Chapter {
        let chapter = new Chapter(this.id, this.title, this.description, this.exercises);
        return chapter;
    }

}
