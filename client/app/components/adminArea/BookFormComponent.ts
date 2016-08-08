import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {Book} from "../../domain/Book/Book";
import {BookBuilder} from "../../domain/Book/BookBuilder";
import {Chapter} from "../../domain/Chapter/Chapter";

import {ChapterFormComponent} from "./ChapterFormComponent";

@Component({
    selector: "bookForm",
    templateUrl: "app/components/adminArea/BookFormComponent.html",
    directives: [ChapterFormComponent]
})
export class BookFormComponent {

    book: Book;
    bookBuilder: BookBuilder;
    currentChapter: Chapter;
    isChapterEditorVisible: boolean = false;

    constructor(private _router: Router) {
        this.bookBuilder = new BookBuilder();
    }

    saveBook() {
        this.book = this.bookBuilder.build();
    }

    openChapterForm() {
        this.isChapterEditorVisible = true;
    }

    newChapterHandler(chapter: Chapter) {

        this.bookBuilder.chapters.push(chapter);
        this.isChapterEditorVisible = false;

    }

    setCurrentChapter(chapter: Chapter): void {
        this.currentChapter = chapter;
    }


}
