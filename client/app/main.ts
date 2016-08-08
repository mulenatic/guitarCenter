import {Component} from "@angular/core";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {bootstrap} from "@angular/platform-browser-dynamic";
import { ROUTER_DIRECTIVES } from "@angular/router";

import {TabComponent} from "./components/exerciseArea/TabComponent";
import {MetroTimerComponent} from "./components/exerciseArea/MetroTimerComponent";
import {BookFormComponent} from "./components/adminArea/BookFormComponent";

import {TabService} from "./services/TabService/TabService";

import {appRouterProviders} from "./app.routes";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [TabComponent, MetroTimerComponent, BookFormComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { };

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), TabService, appRouterProviders]).catch(err => console.log(err));
