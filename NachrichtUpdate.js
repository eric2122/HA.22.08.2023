import React, { useState } from 'react';

function NachrichtUpdate({ setNachricht }) {
  const [updateText, setUpdateText] = useState('');

  function handleUpdate(e) {
    e.preventDefault();
    fetch('http://localhost:8080/api/nachricht/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nachricht: updateText })
    })
    .then(() => {
      setNachricht(updateText);
    });
  }

  return (
    <div className="NachrichtUpdate">
      <h2>Update Nachricht</h2>
      <input type="text" value={updateText} onChange={e => setUpdateText(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default NachrichtUpdate;
