import {Component} from "@angular/core";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {bootstrap} from "@angular/platform-browser-dynamic";
import { ROUTER_DIRECTIVES } from "@angular/router";

import {NavbarComponent} from "./components/navbar/navbar";
import {TabComponent} from "./components/exerciseArea/TabComponent";
import {MetroTimerComponent} from "./components/exerciseArea/MetroTimerComponent";
import {BookFormComponent} from "./components/exerciseArea/BookFormComponent";

import {TabService} from "./services/TabService/TabService";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [NavbarComponent, TabComponent, MetroTimerComponent, BookFormComponent]
})
export class AppComponent { };

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), TabService]);
