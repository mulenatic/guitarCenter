import {Component, Input, OnChanges, SimpleChange, Output, EventEmitter} from "@angular/core";

import {Exercise} from "../../domain/Exercise/Exercise";
import {ExerciseBuilder} from "../../domain/Exercise/ExerciseBuilder";

@Component({
    selector: "exercise-form",
    templateUrl: "components/adminArea/ExerciseForm.Component.html"
})
export class ExerciseFormComponent implements OnChanges {

    private exerciseBuilder: ExerciseBuilder;

    @Input("exercise")
    exerciseInput: Exercise;

    @Output("save-exercise")
    saveExerciseEventEmitter: EventEmitter<Exercise> = new EventEmitter<Exercise>();


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

}
