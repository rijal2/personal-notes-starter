import React from "react";
import AddAndSearch from "./div-add-search/add-search";
import Listbook from "./div-listbook/listbook";

class Main extends React.Component{
    render(){
        return(
            <main>
                <AddAndSearch />
                <Listbook />
            </main>
        )
    }
}

export default Main;