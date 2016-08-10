import {Component} from "@angular/core";

import {TabComponent} from "./Tab.Component";
import {MetroTimerComponent} from "./MetroTimer.Component";

@Component({
    selector: "exerciseMain",
    template: `<div class="col-md-8 col-sm-12">
    <tabComponent></tabComponent>
</div>
<div class="col-md-4 col-sm-12">
    <metroTimerComponent></metroTimerComponent>
</div>`,
    directives: [TabComponent, MetroTimerComponent]
})
export class ExerciseMainComponent {

}
