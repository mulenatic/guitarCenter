export class TabService {


    getTab(): Array<string> {

        let tab: Array<string> = new Array<string>();

        tab.push(`notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 `);


        tab.push(`notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|`);

        return tab;

    }

};
