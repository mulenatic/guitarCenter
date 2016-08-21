import {Book} from "../domain/Book/Book";
import {BookBuilder} from "../domain/Book/BookBuilder";

export class BookService {

    saveBook(book: Book): Book {

        let books: Array<Book> = this.getBooks();
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

    getBooks(): Array<Book> {

        let parsedBooks: Array<any> = JSON.parse(localStorage.getItem("books"));

        let books: Array<Book> = parsedBooks.map(pB => BookBuilder.fromParseJSON(pB));
        return books;
    }

    getBook(id: number): Book {

        let books = this.getBooks();

        let result: Book = books.filter(book => book.id === id)[0];

        return result;

    }


}
