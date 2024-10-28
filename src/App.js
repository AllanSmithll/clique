import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { doc, onSnapshot, updateDoc, increment, serverTimestamp } from 'firebase/firestore';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClick, setLastClick] = useState(null);
  const [isInitialClick, setIsInitialClick] = useState(true);

  const clicksDocRef = doc(db, 'clicks', 'clicksCount');

  useEffect(() => {
    const unsubscribe = onSnapshot(clicksDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setClickCount(data.clicks || 0);
        const lastClickTime = data.lastClick?.toDate() || null;

        if (lastClickTime) {
          setIsInitialClick(false);
        }

        setLastClick(lastClickTime);
      } else {
        console.log('Documento não encontrado.');
      }
    });

    return () => unsubscribe();
  }, [clicksDocRef]);

  const handleButtonClick = async () => {
    try {
      await updateDoc(clicksDocRef, {
        clicks: increment(1),
        lastClick: serverTimestamp(),
      });
    } catch (error) {
      console.error('Erro ao registrar o clique:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Contador de Cliques</h1>
      <p className="countText">Total de cliques: <span className="count">{clickCount}</span></p>
      <p className="lastClickText">
        Último clique: {isInitialClick ? 'Nenhum clique registrado ainda' : lastClick ? lastClick.toLocaleString() : 'Carregando...'}
      </p>
      <button onClick={handleButtonClick} className="button">
        Clique aqui
      </button>
    </div>
  );
}

export default App;