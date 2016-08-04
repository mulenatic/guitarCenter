export class Book {

    constructor(private _title: string, private _author: string, private _description: string) { }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get description(): string {
        return this._description;
    }

}
