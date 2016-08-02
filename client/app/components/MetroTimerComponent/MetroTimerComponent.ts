import {Component, OnInit} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/timestamp";

import * as moment from "moment";

import {ExerciseNavigationComponent} from "../../components/ExerciseNavigationComponent/ExerciseNavigationComponent";

@Component({
    selector: "metroTimerComponent",
    templateUrl: "app/components/MetroTimerComponent/MetroTimerComponent.html",
    directives: [ExerciseNavigationComponent]
})
export class MetroTimerComponent implements OnInit {

    startTimestamp: Date;
    duration: moment.Duration = moment.duration(0);
    timerSource: Observable<any>;
    subscription: Subscription;

    ngOnInit() {

        this.timerSource = Observable.timer(0, 1000).timestamp();

    }

    startTimer(): void {

        this.startTimestamp = new Date();
        this.subscription = this.timerSource.subscribe(payload => {
            this.duration = moment.duration(payload.timestamp - this.startTimestamp.getTime());
        });

    }

    stopTimer(): void {
        this.subscription.unsubscribe();
    }

    getFormattedTime(): string {

        return `${this.addLeadingZero(this.duration.hours())}:${this.addLeadingZero(this.duration.minutes())}:${this.addLeadingZero(this.duration.seconds())}`;

    }

    addLeadingZero(num: number): string {

        return num < 10 ? `0${num}` : `${num}`;

    }

};
