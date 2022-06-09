import React from "react";
import BoxBook from "./box-book";

function DisplayBook({ books, delAction, moveAction }){
        const bookTrue = books.filter((book) => (book.archived === true))
    
        return(
            <section className="book_shelf satu" id="rak1">
                <h2>RAK 1</h2>
                <h2>BUKU BACAAN</h2>
                {
                    bookTrue.map((book) => (

                        <BoxBook id={book.id} delAction={delAction} moveAction={moveAction} key={book.id} {...book}/>
                    ))
                }
            </section>
        )
    
}

export default DisplayBook;