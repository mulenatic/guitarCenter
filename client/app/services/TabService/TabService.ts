import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

import {Exercise} from "../../domain/Exercise/Exercise";

export class TabService {

    private tabs: Array<Exercise> = [];

    private tabIndex: number;

    private _newExerciseBehaviorSubject: BehaviorSubject<Exercise> = new BehaviorSubject<Exercise>(new Exercise("", [""], "", ""));

    newExerciseObservable: Observable<Exercise> = this._newExerciseBehaviorSubject.asObservable();

    constructor() {

        this.tabIndex = -1;

        let lines: Array<string> = new Array<string>();

        lines.push(`notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 `);


        lines.push(`notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|`);

        this.tabs.push(new Exercise("Finger Gym", lines, "1a", null));

        lines = new Array<string>();

        lines.push(`notes =|: :16 4-3-2-1/6  4-3-2-1/5  4-3-2-1/4  4-3-2-1/3 | 4-3-2-1/2 4-3-2-1/1 4-3-2-1/2 4-3-2-1/3 `);


        lines.push(`notes | :16 4-3-2-1/4 4-3-2-1/5 4-3-2-1/6 =:|`);

        this.tabs.push(new Exercise("Finger Gym", lines, "1b", "Blabla"));


    }


    getNextExercise(): Exercise {

        let tab = this.tabs[++this.tabIndex];
        this._newExerciseBehaviorSubject.next(tab);

        return tab;

    }

    hasNextExercise(): boolean {
        return this.tabIndex < this.tabs.length - 1;
    }

    getPreviousExercise(): Exercise {

        let tab = this.tabs[--this.tabIndex];
        this._newExerciseBehaviorSubject.next(tab);

        return tab;

    }


    hasPreviousExercise(): boolean {
        return this.tabIndex > 0;
    }

};
