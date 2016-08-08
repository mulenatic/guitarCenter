import {Exercise} from "./Exercise/Exercise";

export class Chapter {

    constructor(private _title: string, private _id: number, private _exercises: Array<Exercise>) { }

    get title(): string {
        return this._title;
    }

    get exercises(): Array<Exercise> {
        return this._exercises;
    }

    get id(): number {
        return this._id;
    }

}
