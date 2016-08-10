import {Component} from "@angular/core";

import {TabService} from "../../services/TabService/TabService";

@Component({
    selector: "exerciseNavigationComponent",
    templateUrl: "featureAreas/exerciseArea/ExerciseNavigation.Component.html"

})
export class ExerciseNavigationComponent {

    constructor(private tabService: TabService) {

    }



}
