import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Melania from './images/Melania.jpg';

const books = [
    {
        author: 'Melania Trump',
        title: 'Melania',
        img: Melania,
        id: 1

    },

    {
        author: 'Heather Hedway',
        title: 'My Troubles',
        img: Melania,
        id: 2
    }
];

/* const names = [
    'john', 'peter', 'susan'
];
const newNames = names.map((name) => {
    console.log(name);
    return <h1>{name}</h1>
})
 */

//Root Component

const Booklist = () => {
    return (
        <section className='booklist'>
            <EventExamples />
            {books.map((book) => {

                return <Book {...book} key={book.id} />
            })}
        </section >
    );
};

const EventExamples = () => {
    const handleFormInput = () => {
        console.log('handle form input');
    };
    const handleButtonClick = () => {
        alert('handle button click');
    };
    return (<section>
        <form>
            <h2>Typical Form</h2>
            <input type='text'
                name='example'
                placeholder='example'
                onChange={handleFormInput}
                style={{ margin: '1rem 0' }}></input>
        </form>
        <button onClick={handleButtonClick}>click me</button>
    </section>);
};

//Book Component

const Book = (props) => {
    const { img, title, author, children } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            {children}
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