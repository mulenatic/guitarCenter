export class Tab {

    private _lines: Array<string>;
    get lines() {
        return this._lines;
    }

    private _book: string;
    get book() {
        return this._book;
    }

    constructor(book: string, lines: Array<string>) {

        this._lines = lines;
        this._book = book;

    }

}
