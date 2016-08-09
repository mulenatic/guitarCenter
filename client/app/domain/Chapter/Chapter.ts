import {Exercise} from "../Exercise/Exercise";

export class Chapter {

    constructor(private _id: number, private _title: string, private _description: string, private _exercises: Array<Exercise>) { }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get exercises(): Array<Exercise> {
        return this._exercises;
    }

    get id(): number {
        return this._id;
    }

}
