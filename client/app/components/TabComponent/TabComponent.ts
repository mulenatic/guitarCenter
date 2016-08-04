import {Component, OnInit, OnDestroy} from "@angular/core";
import {TabService} from "../../services/TabService/TabService";
import {VexTabComponent} from "../../components/VexTabComponent/VexTabComponent";
import {Exercise} from "../../domain/Exercise/Exercise";

import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "tabComponent",
    templateUrl: "components/TabComponent/TabComponent.html",
    directives: [VexTabComponent]
})
export class TabComponent {

    showStandardNotation: boolean = false;

    private _exercise: Exercise;
    get exercise() {
        return this._exercise;
    }

    set exercise(exercise: Exercise) {
        this._exercise = exercise;
    }

    private subscription: Subscription;

    constructor(private tabService: TabService) {


    }

    ngOnInit() {
        this.subscription = this.tabService.newExerciseObservable.subscribe(
            exercise => {
                this.exercise = exercise;
                console.log(`Setting exercise as ${exercise}.`);
            },
            err => console.error(err),
            () => console.log(`TabService Observable has completed.`)
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

};
