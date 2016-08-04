import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {NavbarComponent} from "./components/navbar/navbar";
import {TabComponent} from "./components/TabComponent/TabComponent";
import {MetroTimerComponent} from "./components/MetroTimerComponent/MetroTimerComponent";
import {BookFormComponent} from "./components/BookFormComponent/BookFormComponent";

import {TabService} "./services/TabService/TabService";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [NavbarComponent, TabComponent, MetroTimerComponent, BookFormComponent]
})
export class AppComponent { };

bootstrap(AppComponent, [TabService]);
