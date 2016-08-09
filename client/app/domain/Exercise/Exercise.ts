export class Exercise {

    constructor(private _id: number, private _title: string, private _description: string, private _lines: Array<string>) { }

    get id() {
        return this._id;
    }

    get lines() {
        return this._lines;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }


}
