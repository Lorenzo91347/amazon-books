import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

const Booklist = () => {
    return <section className='booklist'>
        <Book />
        <Book />
        <Book />
    </section>
}


const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL127_SR127,127_.jpg' alt='Melania' />
const Title = () => <h2>Melania</h2>
const Author = () => {
    return <h4>Melania Trump</h4>
}


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