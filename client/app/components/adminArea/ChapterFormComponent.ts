import {Component, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";

import {Chapter} from "../../domain/Chapter/Chapter";
import {ChapterBuilder} from "../../domain/Chapter/ChapterBuilder";

@Component({
    selector: "chapterFormComponent",
    templateUrl: "components/adminArea/ChapterFormComponent.html"
})
export class ChapterFormComponent {

    @Output("new-chapter")
    saveEventEmitter: EventEmitter<Chapter> = new EventEmitter<Chapter>();

    private _chapter: Chapter;

    chapterBuilder: ChapterBuilder;

    constructor(private _router: Router) {
        this.chapterBuilder = new ChapterBuilder();
    }

    saveChapter() {

        this._chapter = this.chapterBuilder.build();

        this.saveEventEmitter.emit(this._chapter);

    }


}
