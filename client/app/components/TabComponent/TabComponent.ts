import {Component} from "@angular/core";

import {TabService} from "../../services/TabService/TabService"

import {VexTabComponent} from "../../components/VexTabComponent/VexTabComponent";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html",
    directives: [VexTabComponent],
    providers: [TabService]

})
export class TabComponent {

    showStandardNotation: boolean = false;

    private _tab: Array<string> = [];
    get tab() {
        return this._tab;
    }

    constructor(private tabService: TabService) { }

    toggleShowStandardNotation(): void {

        this.showStandardNotation = !this.showStandardNotation;

    }

    onOrOff(): string {

        return this.showStandardNotation ? "off" : "on";

    }

    setNextTab(): void {

        this._tab = this.tabService.getTab();

    }

};
