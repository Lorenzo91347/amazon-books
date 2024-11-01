import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Melania from './images/Melania.jpg';

const firstBook = {
    author: 'Melania Trump',
    title: 'Melania',
    img: Melania
}

const secondBook = {
    author: 'Heather Hedway',
    title: 'My Troubles',
    img: Melania
}

const Booklist = () => {
    return <section className='booklist'>
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
    </section>
}


const Book = (props) => {
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author.toUpperCase()}</h4>
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