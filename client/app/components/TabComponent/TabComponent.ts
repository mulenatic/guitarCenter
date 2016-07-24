import {Component, OnInit, ElementRef} from "@angular/core";

import {TabService} from "../../services/TabService/TabService"

import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html",
    providers: [TabService]
})
export class TabComponent implements OnInit {

    renderer: any;

    showStandardNotation: boolean = false;

    constructor(private elementRef: ElementRef, private tabService: TabService) { }

    ngOnInit() {

        let Renderer = Flow.Renderer;
        this.renderer = new Renderer("tab", Renderer.Backends.CANVAS);

        this.renderTab();

    }

    toggleShowStandardNotation(): void {

        this.showStandardNotation = !this.showStandardNotation;
        this.renderTab();

    }

    onOrOff(): string {

        return this.showStandardNotation ? "off" : "on";

    }

    renderTab(): void {

        try {

            let tabWidth = this.elementRef.nativeElement.parentElement.offsetWidth;

            let artist = new Artist(10, 10, tabWidth - 10, { scale: 1.0 });
            let vextab = new VexTab(artist);

            let tab: Array<string> = this.tabService.getTab();

            tab.forEach(line => {

                let text1: string = this.getTabHeaderString(this.showStandardNotation).concat(line);

                vextab.parse(text1);
            });


            artist.render(this.renderer);


        } catch (e) {
            console.log(e);
        }

    }

    getTabHeaderString(isStandardnotationVisible: boolean): string {

        return `tabstave notation=${isStandardnotationVisible}
`;

    }

};
