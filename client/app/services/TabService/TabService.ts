import {Exercise} from "../../domain/Exercise/Exercise";

export class TabService {

    private tabs: Array<Exercise> = [];

    private tabIndex: number;

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


    getNextTab(): Exercise {

        let tab = this.tabs[++this.tabIndex];
        return tab;


    }

    hasNext(): boolean {
        return this.tabIndex < this.tabs.length - 1;
    }

    getPreviousTab(): Exercise {

        let tab = this.tabs[--this.tabIndex];
        return tab;

    }


    hasPrevious(): boolean {
        return this.tabIndex > 0;
    }

};
