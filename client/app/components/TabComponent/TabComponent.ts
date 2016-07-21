import {Component, OnInit} from "@angular/core";
import {VexTab, Artist, Flow} from "node_modules/vextab/releases/vextab-div.js";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html"
})
export class TabComponent implements OnInit {

    renderer: any;
    artist: any;
    vextab: any;

    ngOnInit() {

        let Renderer = Flow.Renderer;

        this.renderer = new Renderer("tab", Renderer.Backends.CANVAS);

        this.artist = new Artist(10, 10, 600, { scale: 0.8 });
        this.vextab = new VexTab(this.artist);

        try {

            let text: String = "tabstave notation=true\n notes =|: :16 1-2-3-4/6  1-2-3-4/5  1-2-3-4/4  1-2-3-4/3 | 1-2-3-4/2 1-2-3-4/1 1-2-3-4/2 1-2-3-4/3 | 1-2-3-4/4 1-2-3-4/5 1-2-3-4/6 =:|";

            this.vextab.parse(text);

            this.artist.render(this.renderer);
        } catch (e) {
            console.log(e);
        }

    }

};
