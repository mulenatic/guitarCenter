import {Book} from "./Book";
import {Chapter} from "../Chapter/Chapter";

export class BookBuilder {

    constructor(public id?: number, public title?: string, public author?: string, public description?: string, public chapters = new Array<Chapter>()) { }

    build(): Book {
        return new Book(this.id, this.title, this.author, this.description, this.chapters);
    }

    static fromBook(book: Book): BookBuilder {
        return new BookBuilder(book.id, book.title, book.author, book.description, book.chapters);
    }


}
