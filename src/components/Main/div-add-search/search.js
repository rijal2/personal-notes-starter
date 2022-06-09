import React from "react";

class SearchBook extends React.Component{
    render(){
        return(
            <section className="search_section" id="myDIV">
                <h3>Pencarian</h3>
                <form id="searchBook">
                    <label for="searchBookTitle">Judul</label>
                    <input id="searchBookTitle" type="text" />
                    <button id="searchSubmit" type="submit">Cari</button>
                </form>
            </section>
        )
    }
}

export default SearchBook;