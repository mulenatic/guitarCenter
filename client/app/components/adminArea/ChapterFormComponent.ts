import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from "@angular/core";
import {Router} from "@angular/router";

import {Chapter} from "../../domain/Chapter/Chapter";
import {ChapterBuilder} from "../../domain/Chapter/ChapterBuilder";

@Component({
    selector: "chapterFormComponent",
    templateUrl: "components/adminArea/ChapterFormComponent.html"
})
export class ChapterFormComponent implements OnChanges {

    @Input("chapter") chapterInput: Chapter;

    @Output("new-chapter")
    saveEventEmitter: EventEmitter<Chapter> = new EventEmitter<Chapter>();

    chapterBuilder: ChapterBuilder;

    constructor(private _router: Router) {
        this.chapterBuilder = new ChapterBuilder();
    }

    saveChapter() {

        let chapter = this.chapterBuilder.build();

        this.saveEventEmitter.emit(chapter);

    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        this.chapterBuilder = new ChapterBuilder();
        let currentValue = changes["chapterInput"].currentValue;
        this.chapterBuilder.title = currentValue != undefined ? currentValue.title : null;
    }


}
