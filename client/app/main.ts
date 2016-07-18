import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {NavbarComponent} from "./components/navbar/navbar";
import {TabComponent} from "./components/TabComponent/TabComponent";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [NavbarComponent, TabComponent]
})
export class AppComponent { };

bootstrap(AppComponent);
