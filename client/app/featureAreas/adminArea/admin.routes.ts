import {RouterConfig} from "@angular/router";

import {BookFormComponent} from "./BookForm.Component";
import {ChapterFormComponent} from "./ChapterForm.Component";

export const adminRoutes: RouterConfig = [
    { path: "book", component: BookFormComponent }
];
