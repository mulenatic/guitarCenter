import {Book} from "./Book";
import {Chapter} from "../Chapter/Chapter";
import {ChapterBuilder} from "../Chapter/ChapterBuilder";

export class BookBuilder {

    constructor(public id?: number, public title?: string, public author?: string, public description?: string, public chapters = new Array<Chapter>()) { }

    build(): Book {
        return new Book(this.id, this.title, this.author, this.description, this.chapters);
    }

    static fromBook(book: Book): BookBuilder {
        return new BookBuilder(book.id, book.title, book.author, book.description, book.chapters);
    }

    static fromParseJSON(parsedJSON: any) {

        let chapters: Array<any> = parsedJSON._chapters.map(ch => ChapterBuilder.fromParsedJSON(ch));

        return new Book(parsedJSON._id, parsedJSON._title, parsedJSON._author, parsedJSON._description, chapters);

    }


}
