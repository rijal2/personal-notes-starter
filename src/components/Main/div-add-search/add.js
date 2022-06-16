import React from "react";

class AddBook extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: "",
            archived: Boolean,
            limitChart: 0
        }

        this.inputTitle = this.inputTitle.bind(this)
        this.inputBody = this.inputBody.bind(this)
        this.inputArchived = this.inputArchived.bind(this)
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
    }

    countCharacterTitle(){

    }

    inputTitle(event){
        event.target.value.length < 50 ?
        this.setState((previousState) => {
            return {
                ...previousState,
                title: event.target.value,
                limitChart: 50 - event.target.value.length
            }
            
        }) : alert(`Judul yang anda masukkan terlalu panjang`)

    }

    inputBody(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                body: event.target.value
            }
        })

    }

    inputArchived(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                archived: event.target.value === "b" ? true : false
            }
        })

    }

    onSubmitAdd = (event)=> {
        event.preventDefault()
        
        this.props.addNewBook(this.state)
        
    }

    render(){
        return(
            <section className="input_section" id="myDIV">
                <h3>Tambah Buku</h3>
            <form id="inputBook" onSubmit={this.onSubmitAdd}>
                <div className="input">
                    <label>Judul</label>
                    <input id="inputBookTitle" type="text" placeholder="Masukkan judul buku disini ..." value={this.state.title} onChange={this.inputTitle}/>
                    <p><i>Jumlah karakter {this.state.limitChart} (maks. 50 karakter)</i></p>
                </div>
                <div className="input">
                    <label>Deskripsi</label>
                    <textarea id="inputBookAuthor" type="text" placeholder="Tentang buku ini ..." value={this.state.body} onChange={this.inputBody} />
            
                </div>
                <div className="input">
                    <label>Pilih Rak Buku?</label>
                    <select className="input" id="check" value={this.state.archived} onChange={this.inputArchived}>
                        <option >-- Pilih Status Buku</option>
                        <option value="b" >Rak Baca</option>
                        <option value="s" >Rak Arsip Buku</option>
                        
                    </select>
                </div>
                <button id="bookSubmit" type="submit">SAVE</button>
            </form>
            </section>
        )
    }
}

export default AddBook;