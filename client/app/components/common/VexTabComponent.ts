import {Component, OnInit, ElementRef, Input} from "@angular/core";

import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "vexTabComponent",
    templateUrl: "components/common/VexTabComponent.html"
})
export class VexTabComponent implements OnInit {

    private renderer: any;

    private _showStandardNotation: boolean = false;

    private _tab: Array<string> = ["notes "];
    @Input()
    set tab(value: Array<string>) {
        this._tab = value != undefined ? value : ["notes "];
        this.renderTab();
    }
    get tab() {
        return this._tab;
    }

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {

        let Renderer = Flow.Renderer;
        this.renderer = new Renderer("tab", Renderer.Backends.CANVAS);

        this.renderTab();

    }

    renderTab(): void {

        try {

            let tabWidth = this.elementRef.nativeElement.parentElement.parentElement.offsetWidth;

            let artist = new Artist(0, 0, tabWidth - 15, { scale: 1.0 });
            let vextab = new VexTab(artist);



            this.tab.forEach(line => {

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

    toggleShowStandardNotation(): void {

        this._showStandardNotation = !this._showStandardNotation;
        this.renderTab();

    }

    standardNotationButtonText(): string {

        return this._showStandardNotation ? "Hide standard notation" : "Show standard notation ";

    }


};
