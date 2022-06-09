import React from "react";
import AddAndSearch from "./div-add-search/add-search";
import Listbook from "./div-listbook/listbook";
import { getInitialData } from "../../utils/data";

class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            books: getInitialData()
        }
    }
    render(){
        return(
            <main>
                <AddAndSearch />
                <Listbook books={this.state.books}/>
            </main>
        )
    }
}

export default Main;