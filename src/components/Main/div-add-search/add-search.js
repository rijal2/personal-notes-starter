import React from "react";
import AddBook from "./add";
import SearchBook from "./search";

class AddAndSearch extends React.Component{
    render(){
        return(
            <div className="utama pertama">
                <AddBook />
                <SearchBook />
            </div>
        )
    }
}

export default AddAndSearch;