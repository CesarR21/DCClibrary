import React from 'react';


const BookViewer = (props) => {
    return ( 
        <div className="row row-spacer">
        <div className="Col-md-4">
            <button onClick={props.previousBook}>Previous Book</button>
        </div>
        <div className="Col-md-4">
            <h1>{props.book.title}</h1>
            <h4>{props.books.author}</h4>
        </div>
        <div className="Col-md-4">
            <button onClick={props.nextBook}>Next Book</button>

        </div>
     </div>
        

     );
}
 
export default BookViewer;