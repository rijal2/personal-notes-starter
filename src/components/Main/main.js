import React from "react";
import Listbook from "./div-listbook/listbook";
import { getInitialData, showFormattedDate } from "../../utils/data";
import AddBook from "./div-add-search/add";
import SearchBook from "./div-add-search/search";

class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            books: getInitialData()
        }

        this.onSubmitAddNewBook = this.onSubmitAddNewBook.bind(this)

    }

    onSubmitAddNewBook = ({title, body, archived}) => {
        this.setState((previousState) => {
            return{
                books: [
                    ...previousState,
                    {
                         id: `book-${+new Date()}`,
                         title,
                         body,
                         createAt: `${showFormattedDate}`,
                         archived
                     }
                ] 
                
            }
        })
    }

    render(){
        return(
            <main>
                <div className="utama pertama">
                    <AddBook addNewBook={this.onSubmitAddNewBook} />
                    <SearchBook />
                </div>
                <Listbook books={this.state.books}/>
            </main>
        )
    }
}

export default Main;