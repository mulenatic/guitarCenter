import {Component} from "@angular/core";

import {VexTabComponent} from "../../components/VexTabComponent/VexTabComponent";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html",
    directives: [VexTabComponent]

})
export class TabComponent {

    showStandardNotation: boolean = false;

    toggleShowStandardNotation(): void {

        this.showStandardNotation = !this.showStandardNotation;

    }

    onOrOff(): string {

        return this.showStandardNotation ? "off" : "on";

    }

};
