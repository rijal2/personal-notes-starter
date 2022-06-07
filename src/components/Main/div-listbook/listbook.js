import React from "react";
import ArciveBook from "./arcive";
import DisplayBook from "./display";

class Listbook extends React.Component{
    render(){
        return(
            <div className="utama kedua">
                <div className="container">
                    <DisplayBook />
                    <ArciveBook />
                </div>
            </div>
        )
    }
}

export default Listbook;