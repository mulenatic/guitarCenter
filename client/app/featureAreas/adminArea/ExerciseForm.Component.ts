import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from "@angular/core";

import {Exercise} from "../../domain/Exercise/Exercise";
import {ExerciseBuilder} from "../../domain/Exercise/ExerciseBuilder";

@Component({
    selector: "exercise-form",
    templateUrl: "featureAreas/adminArea/ExerciseForm.Component.html"
})
export class ExerciseFormComponent implements OnChanges {

    private exerciseBuilder: ExerciseBuilder;

    @Input("exercise")
    exerciseInput: Exercise;

    @Output("save-exercise")
    saveExerciseEventEmitter: EventEmitter<Exercise> = new EventEmitter<Exercise>();

    @Output("cancel-exercise")
    cancelExerciseEventEmitter: EventEmitter<void> = new EventEmitter<void>();


    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        let currentValue = changes["exerciseInput"].currentValue;
        if (currentValue != undefined) {
            this.exerciseBuilder = ExerciseBuilder.fromExercise(currentValue);
        } else {
            this.exerciseBuilder = new ExerciseBuilder();
        }

    }

    saveExercise() {

        let exercise = this.exerciseBuilder.build();

        this.saveExerciseEventEmitter.emit(exercise);

    }

    cancelExercise() {
        this.cancelExerciseEventEmitter.emit(null);
    }

}
