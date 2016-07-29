import {Component} from "@angular/core";
import {TabService} from "../../services/TabService/TabService";
import {VexTabComponent} from "../../components/VexTabComponent/VexTabComponent";
import {Exercise} from "../../domain/Exercise/Exercise";

@Component({
    selector: "tabComponent",
    templateUrl: "../../../app/components/TabComponent/TabComponent.html",
    directives: [VexTabComponent],
    providers: [TabService]

})
export class TabComponent {

    showStandardNotation: boolean = false;

    private _exercise: Exercise;
    get exercise() {
        return this._exercise;
    }

    constructor(private tabService: TabService) {
        this.setNextTab();
    }


    setNextTab(): void {

        this._exercise = this.tabService.getNextTab();

    }

    hasNextTab(): boolean {

        return this.tabService.hasNext();

    }

    setPreviousTab(): void {

        this._exercise = this.tabService.getPreviousTab();

    }

    hasPreviousTab(): boolean {

        return this.tabService.hasPrevious();

    }


};
