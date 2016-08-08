import {provideRouter, RouterConfig} from "@angular/router";

import {TabComponent} from "./components/exerciseArea/TabComponent";
import {BookFormComponent} from "./components/adminArea/BookFormComponent";

const routes: RouterConfig = [
    { path: "exercise", component: TabComponent },
    { path: "book", component: BookFormComponent },
    { path: "", redirectTo: "/exercise", pathMatch: "full" }
];

export const appRouterProviders = [
    provideRouter(routes)
];
