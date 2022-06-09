import React from "react";

class AddBook extends React.Component{
    render(){
        return(
            <section className="input_section" id="myDIV">
                <h3>Tambah Buku</h3>
            <form id="inputBook">
                <div class="input">
                    <label for="inputBookTitle">Judul</label>
                    <input id="inputBookTitle" type="text" placeholder="Masukkan judul buku disini ..." required />
                </div>
                <div class="input">
                    <label for="inputBookAuthor">Penulis</label>
                    <input id="inputBookAuthor" type="text" placeholder="Siapa nama penulis bukunya?" required />
                </div>
                <div class="input">
                    <label for="inputBookYear">Tahun</label>
                    <input id="inputBookYear" type="number" min="2000" max="2021" step="1" name="year" placeholder="Tahun berapa diterbitkan?" required />
                    
                </div>
                <div class="input">
                    <label for="inputStatus">Apakah bukunya sudah selsai dibaca?</label>
                    <select class="input" id="check">
                        <option value="true">Selesai</option>
                        <option value="false">Belum</option>
                    </select>
                </div>
                <button id="bookSubmit" type="submit">SAVE</button>
            </form>
            </section>
        )
    }
}

export default AddBook;