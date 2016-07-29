import {Tab} from "../../domain/Tab/Tab";

export class TabService {

    private tabs: Array<Tab> = [];

    private tabIndex: number;

    constructor() {

        this.tabIndex = -1;

        let lines: Array<string> = new Array<string>();

        lines.push(`notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 `);


        lines.push(`notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|`);

        this.tabs.push(new Tab("Finger Gym", lines));

        lines = new Array<string>();

        lines.push(`notes =|: :16 4-3-2-1/6  4-3-2-1/5  4-3-2-1/4  4-3-2-1/3 | 4-3-2-1/2 4-3-2-1/1 4-3-2-1/2 4-3-2-1/3 `);


        lines.push(`notes | :16 4-3-2-1/4 4-3-2-1/5 4-3-2-1/6 =:|`);

        this.tabs.push(new Tab("Finger Gym", lines));


    }


    getNextTab(): Array<string> {

        let tab = this.tabs[++this.tabIndex];
        return tab.lines;


    }

    hasNext(): boolean {
        return this.tabIndex < this.tabs.length - 1;
    }

    getPreviousTab(): Array<string> {

        let tab = this.tabs[--this.tabIndex];
        return tab.lines;

    }


    hasPrevious(): boolean {
        return this.tabIndex > 0;
    }

};
