import {RouterConfig} from "@angular/router";

import {BookDetails} from "./BookDetails.Component";
import {BookFormComponent} from "./BookForm.Component";
import {BookListingComponent} from "./BookListing.Component";

export const adminRoutes: RouterConfig = [
    { path: "createBook", component: BookFormComponent },
    { path: "bookList", component: BookListingComponent },
    { path: "book/:id", component: BookDetails }
];
