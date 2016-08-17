import {Component} from "@angular/core";

import {Book} from "../../domain/Book/Book";
import {BookService} from "../../services/Book.Service";

@Component({
    selector: "book-listing",
    templateUrl: "featureAreas/adminArea/BookListing.Component.html"
})
export class BookListingComponent {

    private _books: Array<Book>;

    get books(): Array<Book> {
        return this._books;
    }

    constructor(private _bookService: BookService) {
        this._books = this._bookService.getBooks();
    }

}
