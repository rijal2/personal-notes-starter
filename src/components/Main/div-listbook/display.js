import React from "react";
import BoxBook from "./box-book";

class DisplayBook extends React.Component {
  
    render(){
        // const listTrue = this.props.boT.filter((b) => console.log(b.archived.prototype[0]))
        console.log(`didalam display true All: ${this.props.boT}`)
        // console.log(`didalam display true T: ${listTrue}`)
        return(
            <div className="book_shelf satu" id="rak1">
                <h2>RAK 1</h2>
                <h2>BUKU BACAAN</h2>
                    {
                        
                        this.props.boT.map((b) => (

                            <BoxBook id={b.id} delAction={this.props.delAction} moveAction={this.props.moveAction} key={b.id} {...b}/>
                            )
                        )
                    }
                
                
            </div>
        )
    }
    
}

export default DisplayBook;