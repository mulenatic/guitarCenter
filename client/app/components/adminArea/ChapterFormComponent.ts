import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from "@angular/core";
import {Router} from "@angular/router";

import {Chapter} from "../../domain/Chapter/Chapter";
import {ChapterBuilder} from "../../domain/Chapter/ChapterBuilder";

import {ExerciseFormComponent} from "./ExerciseForm.Component";

@Component({
    selector: "chapterFormComponent",
    templateUrl: "components/adminArea/ChapterFormComponent.html",
    directives: [ExerciseFormComponent]
})
export class ChapterFormComponent implements OnChanges {

    @Input("chapter") chapterInput: Chapter;

    @Output("new-chapter")
    saveEventEmitter: EventEmitter<Chapter> = new EventEmitter<Chapter>();

    chapterBuilder: ChapterBuilder;

    isExerciseFormVisible: boolean = false;

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
        if (currentValue != undefined) {
            this.chapterBuilder.title = currentValue.title;
            this.chapterBuilder.id = currentValue.id;
        }

    }

    exerciseClicked(): void {
        this.isExerciseFormVisible = true;
    }


}
