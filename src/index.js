import React from 'react';
import { createRoot } from 'react-dom/client';
import AddBook from './components/Main/div-add-search/add';
import SearchBook from './components/Main/div-add-search/search';
import Listbook from './components/Main/div-listbook/listbook';
import { getInitialData, showFormattedDate } from './utils/data';
import * as ReactDOM from 'react-dom'

// import style
import './styles/style.css';

class BookApp extends React.Component{
    constructor(props){
        super(props)
        const data = getInitialData()
        this.state = {
            books: data,
            booksTrue: data.filter((book) => book.archived === true),
            booksFalse: data.filter((book) => book.archived === false)
        }

        this.onMove = this.onMove.bind(this)
        this.onSubmitAddNewBook = this.onSubmitAddNewBook.bind(this)
        this.onDelete = this.onDelete.bind(this)

    }
    
    onSubmitAddNewBook = ({title, body, archived}) => {
        // return `${title} - ${body} - ${archived}`
        this.setState((previousState) => {
            const newAr = {
                id: Math.random(7-100),
                title,
                body,
                createAt: `${showFormattedDate(Date)}`,
                archived
            }

            const bookAll = [
                ...previousState.books,
                newAr
            ];
            const bT = () => bookAll.filter((b) => b.archived === true)
            const bF = () => bookAll.filter((b) => b.archived === false)
            return{
                books: [
                    ...bookAll
                ],
                booksTrue: [
                    ...bT()
                ],
                booksFalse: [
                    ...bF(),
                ]
                
            }
        })
        
    }

    onMove = (id) => {
        // this.setState((previousState) => {
        //     const books = () => previousState.books.filter((book) => book.id !== id)
        //     return console.log(books())
        // })
        
        this.setState((previousState) => {
            const books = () => previousState.books.filter((book) => book.id !== id)
            const newAr = () => previousState.books.find((book) => book.id === id)

            const change = (ok) => {
                if(ok.archived === true){
                    return{...ok, archived: false}
                    
                  }
                  return{...ok, archived: true}
            }
            const bT = (ok) => ([...ok, change(newAr())])
              
            return{
                books: [change(newAr()), ...books()],
                booksTrue: [
                    ...bT(books()).filter((book) => book.archived === true),
                    
                ],
                booksFalse: [
                    ...bT(books()).filter((book) => book.archived === false),
                    
                ]
            }
        })
        
    }

    onDelete = (id) => {
        this.setState((previousState) => {
            const seleksi = previousState.books.filter((b) => b.id !== id)
            return{
                books: [
                    ...seleksi
                ]
            }
        })
    }
  
    render(){
        console.log(`buku baru Alls ${ this.state.books }`)  
        console.log(`buku baru T ${ this.state.booksTrue }`)  
        console.log(`buku baru F ${ this.state.booksFalse }`)  
        return(
                <main>
                    <div className='ok'>
                        <div className="utama pertama">
                            <AddBook addNewBook={this.onSubmitAddNewBook} />
                            <SearchBook />
                        </div>
                        <Listbook books={this.state.books} moveTo={this.onMove} onDeleteBook={this.onDelete} />
                    </div>
                </main>
        )
    }
}

const root = createRoot(document.getElementById('yes'));
root.render(
    <BookApp />
);