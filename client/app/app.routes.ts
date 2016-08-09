import {provideRouter, RouterConfig} from "@angular/router";

import {adminRoutes} from "./components/adminArea/admin.routes";
import {exerciseRoutes} from "./components/exerciseArea/exercise.routes";

const routes: RouterConfig = [
    ...exerciseRoutes,
    ...adminRoutes,
    { path: "", redirectTo: "/exercise", pathMatch: "full" }
];

export const appRouterProviders = [
    provideRouter(routes)
];
