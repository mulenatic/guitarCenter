import {Component} from "@angular/core";

import {TabService} from "../../services/Tab.Service";

@Component({
    selector: "exerciseNavigationComponent",
    templateUrl: "featureAreas/exerciseArea/ExerciseNavigation.Component.html"

})
export class ExerciseNavigationComponent {

    constructor(private tabService: TabService) {

    }



}
