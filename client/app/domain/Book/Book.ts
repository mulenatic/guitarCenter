import {Chapter} from "../Chapter/Chapter";

export class Book {

    constructor(private _title: string, private _author: string, private _description: string, private _chapters: Array<Chapter>) {
        if (_chapters === undefined) {
            this._chapters = new Array<Chapter>();
        }
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get description(): string {
        return this._description;
    }

    get chapters(): Array<Chapter> {
        return this._chapters;
    }

}
