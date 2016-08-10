import {Component, trigger, state, style, transition, animate, Input} from "@angular/core";

@Component({
    selector: "metronomeDot",
    templateUrl: "featureAreas/exerciseArea/MetronomeDot.html",
    animations: [
        trigger("activeState", [
            state("inactive", style({
                backgroundColor: "#403F3F",
                transform: "scale(1)"
            })),
            state("active", style({
                backgroundColor: "#3498DB",
                transform: "scale(1.2)"
            })),
            transition("inactive => active", animate("100ms ease-in")),
            transition("active => inactive", animate("100ms ease-out"))
        ])
    ]
})
export class MetronomeDot {

    @Input() state: string;

}
