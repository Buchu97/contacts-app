import React, { useState, useEffect } from 'react';
import './App.css';

// Main App component
function App() {
  // Creating State for storing data
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetching contact data from the provided API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);


  // Filtering contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">

      <main>
        <h1>Contacts</h1>
        <input
          type="text"
        
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}  // Filtering contacts based on search term
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
      </main>
    </div>
  );
}

export default App; // Exports App
