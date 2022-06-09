import React from "react";
import BoxBook from "./box-book";

function ArciveBook({ books }){
    const bookFlase = books.filter((book) => (book.archived === false))
        return(
            <section className="book_shelf dua" id="rak2">
                <h2>RAK 2</h2>
                <h2>ARSIP BUKU</h2>
                {
                    bookFlase.map((book) => (

                        <BoxBook key={book.id} {...book}/>
                    ))
                }
            </section>
        )
    
}

export default ArciveBook;