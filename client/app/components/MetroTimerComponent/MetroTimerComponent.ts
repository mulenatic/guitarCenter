import {Component, OnInit} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/timestamp";

import {ExerciseNavigationComponent} from "../../components/ExerciseNavigationComponent/ExerciseNavigationComponent";

@Component({
    selector: "metroTimerComponent",
    templateUrl: "app/components/MetroTimerComponent/MetroTimerComponent.html",
    directives: [ExerciseNavigationComponent]
})
export class MetroTimerComponent implements OnInit {

    startTimestamp: any;
    timestamp: any;
    timerSource: Observable<any>;
    subscription: Subscription;

    ngOnInit() {

        this.timerSource = Observable.timer(0, 1000).timestamp();

    }

    onStart(): void {

        this.subscription = this.timerSource.subscribe(x => {
            this.startTimestamp = this.startTimestamp == undefined ? x.timestamp : this.startTimestamp;
            this.timestamp = x.timestamp - this.startTimestamp;
        });

    }

    onStop(): void {
        this.subscription.unsubscribe();
    }

};
