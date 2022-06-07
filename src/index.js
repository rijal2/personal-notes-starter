import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

class BookApp extends React.Component{
    render(){
        return(
            <body>
                <Header />
                <Main />
                <Footer />
            </body>
        )
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<BookApp />);