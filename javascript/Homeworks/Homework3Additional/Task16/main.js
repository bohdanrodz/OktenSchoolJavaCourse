let books = [
    {
        title: "The Hobbit",
        pageCount: 310,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Clean Code",
        pageCount: 464,
        authors: ["Robert C. Martin"],
        genres: ["Programming"]
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        pageCount: 223,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy"]
    },
    {
        title: "Thinking, Fast and Slow",
        pageCount: 499,
        authors: ["Daniel Kahneman"],
        genres: ["Psychology", "Non-fiction"]
    },
    {
        title: "The Pragmatic Programmer",
        pageCount: 352,
        authors: ["Andrew Hunt", "David Thomas"],
        genres: ["Programming", "Software Development"]
    }
];

// 1
let biggestBooks = [books[0]];
for (let i = 1; i < books.length; i++) {
    if (books[i].pageCount > biggestBooks[0].pageCount) {
        biggestBooks = [books[i]];
    } else if (books[i].pageCount === biggestBooks[0].pageCount) {
        biggestBooks.push(books[i]);
    }
}
if (biggestBooks.length > 1) {
    console.log(`The biggest books are`);
    for (let book of biggestBooks) {
        console.log(`"${book.title}"`);
    }
    console.log(`Each of them has ${biggestBooks[0].pageCount} pages`);
} else {
    console.log(`The biggest book is "${biggestBooks[0].title}". It has ${biggestBooks[0].pageCount} pages.`);
}

// 2
let biggestAmountOfGenresBooks = [books[0]];
for (let i = 1; i < books.length; i++) {
    if (books[i].genres.length > biggestAmountOfGenresBooks[0].genres.length) {
        biggestAmountOfGenresBooks = [books[i]];
    } else if (books[i].genres.length === biggestAmountOfGenresBooks[0].genres.length) {
        biggestAmountOfGenresBooks.push(books[i]);
    }
}
if (biggestAmountOfGenresBooks.length > 1) {
    console.log('The books with biggest amount of genres are')
    for (let book of biggestAmountOfGenresBooks) {
        console.log(`"${book.title}"`);
    }
    console.log(`Each of them has ${biggestAmountOfGenresBooks[0].genres.length} genres`)
} else {
    console.log(`The book with the biggest amount of genres is "${biggestAmountOfGenresBooks.title}". It has ${biggestAmountOfGenresBooks.genres.length} genres.`);
}


// 3
let longestTitleBooks = [books[0]];
for (let i = 1; i < books.length; i++) {
    if (books[i].title.length > longestTitleBooks[0].title.length) {
        longestTitleBooks = [books[i]];
    } else if (books[i].title.length === longestTitleBooks[0].title.length) {
        longestTitleBooks.push(books[i]);
    }
}
if (longestTitleBooks.length === 1){
    console.log(`The book with the longest title is "${longestTitleBooks[0].title}". It contains ${longestTitleBooks[0].title.length} symbols.`);
} else {
    console.log('The books with the longest titles are');
    for (let book of longestTitleBooks) {
        console.log(`"${book.title}"`);
    }
    console.log(`Each of them contains ${longestTitleBooks[0].title.length} symbols.`);
}

// 4
let twoAuthorsBooks = [];
for (let book of books) {
    if (book.authors.length === 2) {
        twoAuthorsBooks.push(book)
    }
}
if (twoAuthorsBooks.length > 1) {
    console.log('The books with two authors are');
    for (let book of twoAuthorsBooks) {
        console.log(`"${book.title}"`);
    }
} else if (twoAuthorsBooks.length === 1) {
    console.log(`The book with two authors is "${twoAuthorsBooks[0].title}"`);
}
else {
    console.log('There is no books with two authors');
}

// 5
let oneAuthorBooks = [];
for (let book of books) {
    if (book.authors.length === 1) {
        oneAuthorBooks.push(book);
    }
}
if (oneAuthorBooks.length > 1) {
    console.log('The books with one author are');
    for (let book of oneAuthorBooks) {
        console.log(`"${book.title}"`);
    }
} else if (oneAuthorBooks.length === 1) {
    console.log(`The book with one author is "${oneAuthorBooks[0].title}"`);
}
else {
    console.log('There is no books with one author');
}

