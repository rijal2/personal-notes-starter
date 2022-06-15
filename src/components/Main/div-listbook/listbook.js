import React from "react";
import ArciveBook from "./arcive";
import DisplayBook from "./display";
import { getInitialData } from "../../../utils/data";

class Listbook extends React.Component{
    constructor(props){
        super(props)
 
    }

    render(){
        // console.log(`Didalam Listbook T ${this.props.booksTr}`)
        // console.log(`Didalam Listbook F ${this.props.books}`)
        // const ok = this.props.booksTr.filter((b) => b.archived === true)
        return(
            <div className="utama kedua">
                <div className="container">
                    <DisplayBook boT={this.props.books.filter((b) => b.archived === "b")} delAction={this.props.onDeleteBook} moveAction={this.props.moveTo} />
                    <ArciveBook boF={this.props.books.filter((b) => b.archived === "s")} delAction={this.props.onDeleteBook} moveAction={this.props.moveTo} />
                </div>
            </div>
        )
        
    }
}


export default Listbook;