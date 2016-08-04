import {Book} from "./Book";

export class BookBuilder {

    constructor(public title: string, public author: string, public description: string) { }

    build(): Book {
        return new Book(this.title, this.author, this.description);
    }


}
