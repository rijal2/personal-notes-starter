import React from "react";
import AddBook from "./add";
import SearchBook from "./search";

function AddAndSearch({ addNewBook }){
        
        return(
            <div className="utama pertama">
                <AddBook addNewBook = {addNewBook}/>
                <SearchBook />
            </div>
        )
    
}

export default AddAndSearch;