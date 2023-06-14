import React, { useState } from 'react';

function QuoteForm() {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quote, name })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setQuote('');
      setName('');
    })
    .catch(error => console.error(error));
  }

  const handleQuoteChange = (event) => {
    setQuote(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quote:
        <input type="text" value={quote} onChange={handleQuoteChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuoteForm;
