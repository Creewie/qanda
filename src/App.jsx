import { useState } from 'react'
import './App.css'

function App() {

  // Funkcje potem
  var pytania = ['que']

  return (
    <>
      <div>
        <h1>Gra: Q&A</h1>
        <p>Pytanie</p>
        <input type='text' id='odpowiedz' placeholder='Tu wpisz odpowiedź'></input>
        <p>Punkty</p>
        <button id='rozpocznij'>Rozpocznij gre</button>
        <p>Zakończenie gry</p>
        <button id='zrestartuj'>Zrestartuj gre</button>
      </div>
    </>
  )
}

export default App
