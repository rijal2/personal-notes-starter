import React from "react";
import Button from "./button/div-button";

function BoxBook({ title, body}){

    return (
        <div className="book_list">
            <article className="book_item">
                <h3>{title}</h3>
                <p>Deskripsi:</p>
                <p>{body}</p>
                <Button />
            </article>
        </div>
    )
}



export default BoxBook