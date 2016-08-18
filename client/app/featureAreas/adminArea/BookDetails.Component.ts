import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {BookService} from "../../services/Book.Service";
import {Book} from "../../domain/Book/Book";

@Component({
    selector: "book-details",
    templateUrl: "../../featureAreas/adminArea/BookDetails.Component.html"
})
export class BookDetails implements OnInit {

    _book: Book;

    get book(): Book {
        return this._book;
    }

    constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private _bookService: BookService) {

    }

    ngOnInit() {
        this._activatedRouter.params.subscribe(params => {
            let id = +params["id"];
            this._book = this._bookService.getBook(id);
        })

    }

}
