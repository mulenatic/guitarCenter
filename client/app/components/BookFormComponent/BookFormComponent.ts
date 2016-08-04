import {Component} from "@angular/core";

import {Book} from "../../domain/Book/Book";
import {BookBuilder} from "../../domain/Book/BookBuilder";

@Component({
    selector: "bookForm",
    templateUrl: "app/components/BookFormComponent/BookFormComponent.html"
})
export class BookFormComponent {

    book: Book;
    bookBuilder: BookBuilder;

    constructor() {
        this.bookBuilder = new BookBuilder();
    }


}
