import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from "@angular/core";
import {Router} from "@angular/router";

import {Chapter} from "../../domain/Chapter/Chapter";
import {ChapterBuilder} from "../../domain/Chapter/ChapterBuilder";
import {Exercise} from "../../domain/Exercise/Exercise";

import {ExerciseFormComponent} from "./ExerciseForm.Component";

@Component({
    selector: "chapterFormComponent",
    templateUrl: "components/adminArea/ChapterFormComponent.html",
    directives: [ExerciseFormComponent]
})
export class ChapterFormComponent implements OnChanges {

    @Input("chapter") chapterInput: Chapter;

    @Output("save-chapter")
    saveChapterEventEmitter: EventEmitter<Chapter> = new EventEmitter<Chapter>();

    @Output("cancel-chapter")
    cancelChapterEventEmitter: EventEmitter<void> = new EventEmitter<void>();

    chapterBuilder: ChapterBuilder;

    currentExercise: Exercise;
    isExerciseFormVisible: boolean = false;

    constructor(private _router: Router) {
        this.chapterBuilder = new ChapterBuilder();
    }

    saveChapter() {

        let chapter = this.chapterBuilder.build();

        this.saveChapterEventEmitter.emit(chapter);

    }

    cancelChapter() {
        this.cancelChapterEventEmitter.emit(null);
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        this.chapterBuilder = new ChapterBuilder();
        let chapterInput = changes["chapterInput"].currentValue;
        if (chapterInput != undefined) {
            this.chapterBuilder = ChapterBuilder.fromChapter(chapterInput);
        }

    }

    openExerciseForm(exercise?: Exercise) {
        this.currentExercise = exercise;
        this.isExerciseFormVisible = true;
    }

    saveExerciseHandler(exercise: Exercise): void {

        if (exercise.id === undefined) {
            exercise = new Exercise(this.chapterBuilder.exercises.length, exercise.title, exercise.description, exercise.lines);
            this.chapterBuilder.exercises.push(exercise);
        } else {
            let index = this.chapterBuilder.exercises.map(e => e.id).indexOf(exercise.id);
            this.chapterBuilder.exercises[index] = exercise;
        }

        this.isExerciseFormVisible = false;

    }

    cancelExerciseHandler(): void {
        this.isExerciseFormVisible = false;
    }


}
