import {Component, OnInit, ElementRef, Input} from "@angular/core";

import {TabService} from "../../services/TabService/TabService"

import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "vexTabComponent",
    templateUrl: "../../../app/components/VexTabComponent/VexTabComponent.html",
    providers: [TabService]
})
export class VexTabComponent implements OnInit {

    renderer: any;

    private _showStandardNotation: boolean;

    @Input()
    set showStandardNotation(value: boolean) {
        this._showStandardNotation = value != undefined ? value : false;
        this.renderTab();
    };

    constructor(private elementRef: ElementRef, private tabService: TabService) { }

    ngOnInit() {

        let Renderer = Flow.Renderer;
        this.renderer = new Renderer("tab", Renderer.Backends.CANVAS);

        this.renderTab();

    }

    renderTab(): void {

        try {

            let tabWidth = this.elementRef.nativeElement.parentElement.parentElement.offsetWidth;

            let artist = new Artist(10, 10, tabWidth - 10, { scale: 1.0 });
            let vextab = new VexTab(artist);

            let tab: Array<string> = this.tabService.getTab();

            tab.forEach(line => {

                let text1: string = this.getTabHeaderString(this._showStandardNotation).concat(line);

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
