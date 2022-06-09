import React from "react";
import ArciveBook from "./arcive";
import DisplayBook from "./display";
import { getInitialData } from "../../../utils/data";

class Listbook extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            books: getInitialData()
        }

        this.onDeleteBook = this.onDeleteBook.bind(this)
        this.onMoveBook = this.onMoveBook.bind(this)
    }

    onDeleteBook(id){
        const books = this.state.books.filter((book) => (book.id) !== id);
        this.setState({books})
    }

    onMoveBook(id){
        alert('are you ok?')
        
    }

    render(){
        return(
            <div className="utama kedua">
                <div className="container">
                    <DisplayBook books={this.state.books} delAction={this.onDeleteBook} moveAction={this.onMoveBook} />
                    <ArciveBook books={this.state.books} delAction={this.onDeleteBook} moveAction={this.onMoveBook} />
                </div>
            </div>
        )
        
    }
}


export default Listbook;