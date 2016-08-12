import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {Book} from "../../domain/Book/Book";
import {BookBuilder} from "../../domain/Book/BookBuilder";
import {Chapter} from "../../domain/Chapter/Chapter";

import {ChapterFormComponent} from "./ChapterForm.Component";

import {BookService} from "../../services/Book.Service";

@Component({
    selector: "bookForm",
    templateUrl: "app/featureAreas/adminArea/BookForm.Component.html",
    directives: [ChapterFormComponent]
})
export class BookFormComponent {

    bookBuilder: BookBuilder;
    currentChapter: Chapter;
    isChapterEditorVisible: boolean = false;

    constructor(private _router: Router, private _bookService: BookService) {
        this.bookBuilder = new BookBuilder();
    }

    saveBook() {
        let book = this._bookService.saveBook(this.bookBuilder.build());
        this.bookBuilder = BookBuilder.fromBook(book);
    }

    openChapterForm(chapter?: Chapter) {
        this.currentChapter = chapter;
        this.isChapterEditorVisible = true;
    }

    saveChapterHandler(chapter: Chapter) {

        if (chapter.id === undefined) {
            chapter = new Chapter(this.bookBuilder.chapters.length, chapter.title, chapter.description, chapter.exercises);
            this.bookBuilder.chapters.push(chapter);
        } else {
            let index = this.bookBuilder.chapters.map(ch => ch.id).indexOf(chapter.id);
            this.bookBuilder.chapters[index] = chapter;
        }


        this.isChapterEditorVisible = false;

    }

    cancelChapterHandler(): void {
        this.isChapterEditorVisible = false;
    }



}
