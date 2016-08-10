import {Book} from "../domain/Book/Book";

export class BookService {

    saveBook(book: Book): Book {

        let books: Array<Book> = JSON.parse(localStorage.getItem("books"));
        books = books != null ? books : new Array<Book>();

        if (book.id != undefined) {
            let index = books.map(b => b.id).indexOf(book.id);
            books[index] = book;
        } else {
            book = new Book(books.length, book.title, book.author, book.description, book.chapters);
            books.push(book);
        }

        localStorage.setItem("books", JSON.stringify(books));

        return book;

    }

}
