import {Component} from "@angular/core";

import {TabService} from "../../services/TabService/TabService";

@Component({
    selector: "exerciseNavigationComponent",
    templateUrl: "components/ExerciseNavigationComponent/ExerciseNavigationComponent.html",
    providers: [TabService]

})
export class ExerciseNavigationComponent {

    constructor(private tabService: TabService) {

    }



}
