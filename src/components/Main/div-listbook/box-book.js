import { render } from "@testing-library/react";
import React from "react";
import Button from "./button/div-button";

class BoxBook extends React.Component{
    constructor(props){
        super(props)

        this.moveToGreatest = this.moveToGreatest.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
    }

    moveToGreatest = (event) => {
        alert(`Anda yakin ingin memindahkan buku ini`)
        // event.preventDefault()

        this.props.moveAction(this.props.id)
    }

    deleteBook = (event) => {
        alert('Apakah Anda yakin ingin MENGHAPUS buku ini?')
        this.props.delAction(this.props.id)
    }

    render(){
        return (
            <div className="book_list">
                <article className="book_item">
                    <h3>{this.props.title}</h3>
                    <p>Deskripsi: {this.props.archived.toString()} dan {this.props.id}</p>
                    <p>{this.props.body}</p>
                    <Button id={this.props.id} delAction={this.deleteBook} moveAction={this.moveToGreatest} />
                </article>
            </div>
        )

    }
}



export default BoxBook