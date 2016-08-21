import {Component, Input} from "@angular/core";

import {Chapter} from "../../domain/Chapter/Chapter";

import {ExerciseDetails} from "./ExerciseDetails.Component";

@Component({
    selector: "chapter-details",
    templateUrl: "../../featureAreas/adminArea/ChapterDetails.Component.html",
    directives: [ExerciseDetails]
})
export class ChapterDetails {

    private _chapter: Chapter;

    get chapter(): Chapter {
        return this._chapter;
    }

    @Input()
    set chapter(chapter: Chapter) {
        this._chapter = chapter;
        console.log(JSON.stringify(this._chapter));
    };

}