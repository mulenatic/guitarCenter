import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {NavbarComponent} from "./components/navbar/navbar";

@Component({
    selector: "app",
    templateUrl: "app/main.html",
    directives: [NavbarComponent]
})
export class AppComponent { };

bootstrap(AppComponent);
