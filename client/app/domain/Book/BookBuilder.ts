import {Book} from "./Book";
import {Chapter} from "../Chapter/Chapter";

export class BookBuilder {

    constructor(public title?: string, public author?: string, public description?: string, public chapters?: Array<Chapter>) {
        if (chapters === undefined) {
            this.chapters = new Array<Chapter>();
        }
    }

    build(): Book {
        return new Book(this.title, this.author, this.description, this.chapters);
    }


}
