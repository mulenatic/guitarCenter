import {Exercise} from "./Exercise/Exercise";

export class Chapter {

    constructor(private _title: string, private _exercises: Array<Exercise>) { }

    get title(): string {
        return this._title;
    }

    get exercises(): Array<Exercise> {
        return this._exercises;
    }

}
