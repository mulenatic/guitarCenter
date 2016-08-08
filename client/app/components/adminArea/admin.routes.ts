import {RouterConfig} from "@angular/router";

import {BookFormComponent} from "./BookFormComponent";
import {ChapterFormComponent} from "./ChapterFormComponent";

export const adminRoutes: RouterConfig = [
    { path: "book", component: BookFormComponent }
];
