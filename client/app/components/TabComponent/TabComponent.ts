import {Component, OnInit, ElementRef} from "@angular/core";
import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html"
})
export class TabComponent implements OnInit {

    renderer: any;

    showStandardNotation: boolean = false;

    constructor(private elementRef: ElementRef) { }

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

            let text1: String = `tabstave notation=${this.showStandardNotation}
notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 `;

            vextab.parse(text1);

            let text2: String = `tabstave notation=${this.showStandardNotation}
notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|`;

            vextab.parse(text2);
            artist.render(this.renderer);


        } catch (e) {
            console.log(e);
        }

    }

};
