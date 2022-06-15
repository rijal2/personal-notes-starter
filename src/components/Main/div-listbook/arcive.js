import React from "react";
import BoxBook from "./box-book";

function ArciveBook(props){
    // const listFalse = props.boT.filter((b) => b.archived === false)
        return(
            <div className="book_shelf dua" id="rak2">
                <h2>RAK 2</h2>
                <h2>ARSIP BUKU</h2>
                {
                    props.boF.map((b) => (
                        <BoxBook id={b.id} delAction={props.delAction} moveAction={props.moveAction} key={b.id} {...b}/>
                    ))
                }
                
                {/* <BoxBook id={book.id} delAction={delAction} moveAction={moveAction} key={book.id} {...book}/> */}
            </div>
        )
    
}

export default ArciveBook;