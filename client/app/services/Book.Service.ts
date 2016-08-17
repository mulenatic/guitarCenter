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

        let books: Array<Book> = parsedBooks.map(pB => {
            let bookBuilder: BookBuilder = new BookBuilder(pB._id, pB._title, pB._author, pB._description, pB._chapters);
            return bookBuilder.build();
        });
        return books;
    }


}
