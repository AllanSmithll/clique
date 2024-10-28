import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore';

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Referência ao documento específico para contagem de cliques
  const clicksDocRef = doc(db, 'clicks', 'clicksCount');

  useEffect(() => {
    // Observa as mudanças no documento `clicksCount`
    const unsubscribe = onSnapshot(clicksDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setClickCount(data.clicks || 0);
      } else {
        console.log('Documento não encontrado.');
      }
    });

    return () => unsubscribe();
  }, [clicksDocRef]);

  const handleButtonClick = async () => {
    try {
      await updateDoc(clicksDocRef, {
        clicks: increment(1), // Atualiza o campo `clicks`
      });
    } catch (error) {
      console.error('Erro ao registrar o clique:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador de Cliques</h1>
      <p style={styles.countText}>Total de Cliques: <span style={styles.count}>{clickCount}</span></p>
      <button onClick={handleButtonClick} style={styles.button}>
        Clique Aqui
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  countText: {
    fontSize: '1.5rem',
    margin: '20px 0',
    color: '#555',
  },
  count: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default App;