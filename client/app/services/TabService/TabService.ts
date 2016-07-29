export class TabService {

    private tabs: Array<Array<string>> = [];

    private tabIndex: number;

    constructor() {

        this.tabIndex = -1;


        let tab: Array<string> = new Array<string>();

        tab.push(`notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 `);


        tab.push(`notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|`);

        this.tabs.push(tab);

        tab = new Array<string>();

        tab.push(`notes =|: :16 4-3-2-1/6  4-3-2-1/5  4-3-2-1/4  4-3-2-1/3 | 4-3-2-1/2 4-3-2-1/1 4-3-2-1/2 4-3-2-1/3 `);


        tab.push(`notes | :16 4-3-2-1/4 4-3-2-1/5 4-3-2-1/6 =:|`);

        this.tabs.push(tab);


    }


    getNextTab(): Array<string> {

        let tab = this.tabs[++this.tabIndex];
        return tab;


    }

    hasNext(): boolean {
        return this.tabIndex < this.tabs.length - 1;
    }

    getPreviousTab(): Array<string> {

        let tab = this.tabs[--this.tabIndex];
        return tab;

    }


    hasPrevious(): boolean {
        return this.tabIndex > 0;
    }

};
