import React, { useState, useEffect } from 'react'
import QuoteForm from './QuoteForm'
import List from './List'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('/quotes', {
      method: 'GET',
      
      },
      
    )
      .then(response => response.json()) 
      .then(data => {
          setQuotes(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      
      <QuoteForm setQuotes={setQuotes}/>
      <List quotes={quotes} setQuotes={setQuotes}/>

      
    </div>
  );
}

export default App