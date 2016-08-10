import {provideRouter, RouterConfig} from "@angular/router";

import {adminRoutes} from "./featureAreas/adminArea/admin.routes";
import {exerciseRoutes} from "./featureAreas/exerciseArea/exercise.routes";

const routes: RouterConfig = [
    ...exerciseRoutes,
    ...adminRoutes,
    { path: "", redirectTo: "/exercise", pathMatch: "full" }
];

export const appRouterProviders = [
    provideRouter(routes)
];
