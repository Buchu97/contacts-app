import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '10px', margin: '20px', width: '300px' }}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
