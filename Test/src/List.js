import { response } from 'express'
import React from 'react'

function List(props) {
    const handleDelete = (id) => {
        // Delete form db
        fetch(`/quotes/${id}`, {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then((data) => {
            // filtering out the deleted quote
            const updatedQuotes = props.quotes.filter((quote) => quote._id !== id)
            props.setQuotes(updatedQuotes)
        })
        .catch((error) => {
            console.error(error)
        })
    }
    return (
        <div>
            <h2>List</h2>
            <ul>
                {props.quotes.map((item) => (

                    <li key={item._id}>
                        <p>Name: {item.name}</p>
                        <p>Quote: {item.quote}</p>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                    
                )
                )}
            </ul>
        </div>
    )
}

export default List