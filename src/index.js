import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Melania from './images/Melania.jpg';

const Booklist = () => {
    return <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
}

const author = 'Melania Trump';
const title = 'Melania';
const img = Melania;
const Book = () => {

    return (
        <article className='book'>
            <img src={img} alt='Melania' />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            {/* <p>{let x = 6}</p> */}
        </article>
    );
};


/* function Greeting() {
    return React.createElement('h2', {}, 'hello world')
}; */

/* const Greeting = () => {
    return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, 'hello world')
    );
}; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />);
export default Booklist; 