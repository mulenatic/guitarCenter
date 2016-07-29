export class Exercise {

    private _lines: Array<string>;
    get lines() {
        return this._lines;
    }

    private _book: string;
    get book() {
        return this._book;
    }

    private _title: string;
    get title() {
        return this._title;
    }

    private _description: string;
    get description() {
        return this._description;
    }

    constructor(book: string, lines: Array<string>, title: string, description: string) {

        this._lines = lines;
        this._book = book;
        this._title = title;
        this._description = description;

    }

}
