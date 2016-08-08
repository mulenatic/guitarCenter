import {Chapter} from "./Chapter";
import {Exercise} from "../Exercise/Exercise";


export class ChapterBuilder {

    constructor(public title?: string, public exercises?: Array<Exercise>) { }

    build(): Chapter {
        return new Chapter(this.title, this.exercises);
    }

}
