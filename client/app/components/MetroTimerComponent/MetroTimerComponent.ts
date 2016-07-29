import {Component} from "@angular/core";

import {ExerciseNavigationComponent} from "../../components/ExerciseNavigationComponent/ExerciseNavigationComponent";

@Component({
    selector: "metroTimerComponent",
    templateUrl: "app/components/MetroTimerComponent/MetroTimerComponent.html",
    directives: [ExerciseNavigationComponent]
})
export class MetroTimerComponent { };
