import {Component, OnInit, ElementRef} from "@angular/core";
import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html",
    styles: ["canvas { border: 2px solid black; }"]
})
export class TabComponent implements OnInit {

    renderer: any;
    artist: any;
    vextab: any;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {

        let Renderer = Flow.Renderer;

        let tabWidth = this.elementRef.nativeElement.parentElement.offsetWidth;


        this.renderer = new Renderer("tab", Renderer.Backends.CANVAS);

        this.artist = new Artist(10, 10, tabWidth - 10, { scale: 1.0 });
        this.vextab = new VexTab(this.artist);

        try {

            let text1: String = "tabstave notation=true\n notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 ";

            this.vextab.parse(text1);

            let text2: String = "tabstave notation=true\n notes | :16 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|";

            this.vextab.parse(text2);
            this.artist.render(this.renderer);


        } catch (e) {
            console.log(e);
        }

    }

};
