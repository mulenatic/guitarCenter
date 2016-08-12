import {RouterConfig} from "@angular/router";

import {BookFormComponent} from "./BookForm.Component";
import {BookListingComponent} from "./BookListing.Component";

export const adminRoutes: RouterConfig = [
    { path: "book", component: BookFormComponent },
    { path: "bookListing", component: BookListingComponent }
];
