import {provideRouter, RouterConfig} from "@angular/router";

import {TabComponent} from "./components/exerciseArea/TabComponent";
import {adminRoutes} from "./components/adminArea/admin.routes";

const routes: RouterConfig = [
    { path: "exercise", component: TabComponent },
    ...adminRoutes,
    { path: "", redirectTo: "/exercise", pathMatch: "full" }
];

export const appRouterProviders = [
    provideRouter(routes)
];
