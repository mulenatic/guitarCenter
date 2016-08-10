import {Component} from "@angular/core";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {bootstrap} from "@angular/platform-browser-dynamic";
import { ROUTER_DIRECTIVES } from "@angular/router";

import {TabService} from "./services/Tab.Service";

import {appRouterProviders} from "./app.routes";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { };

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), TabService, appRouterProviders]).catch(err => console.log(err));
