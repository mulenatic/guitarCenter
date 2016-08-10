import {Book} from "../domain/Book/Book";

export class BookService {

    saveBook(book: Book) {

        let books: Array<Book> = JSON.parse(localStorage.getItem("books"));
        books = books != null ? books : new Array<Book>();

        if (book.id != undefined) {
            books[book.id] = book;
        } else {
            books.push(new Book(books.length, book.title, book.author, book.description, book.chapters));
        }

        localStorage.setItem("books", JSON.stringify(books));

    }

}
