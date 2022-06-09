import React from "react";
import ArciveBook from "./arcive";
import DisplayBook from "./display";

function Listbook({ books }){
        return(
            <div className="utama kedua">
                <div className="container">
                    <DisplayBook books={books} />
                    <ArciveBook books={books} />
                </div>
            </div>
        )
    
}

export default Listbook;