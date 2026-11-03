import { useState } from 'react'
import './App.css'

function App() {
  const [PoSzyfrowaniu, setPoSzyfrowaniu] = useState('')

  function pobierzDane() {
    let PrzedSzyfrem = document.getElementById('przed').value
    // zasady szyfrowania (szyfr Cezara): kazda litera przesunieta o 1, z = a
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('z', '#')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('y', 'z')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('x', 'y')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('w', 'x')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('v', 'w')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('u', 'v')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('t', 'u')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('s', 't')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('r', 's')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('q', 'r')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('p', 'q')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('o', 'p')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('n', 'o')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('m', 'n')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('l', 'm')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('k', 'l')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('j', 'k')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('i', 'j')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('h', 'i')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('g', 'h')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('f', 'g')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('e', 'f')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('d', 'e')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('c', 'd')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('b', 'c')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('a', 'b')
    PrzedSzyfrem = PrzedSzyfrem.replaceAll('#', 'a')
    setPoSzyfrowaniu(PrzedSzyfrem)
  }

  return (
    <div className='body'>
      
      <h1>Wypisz to co chcesz zaszyfrowac:</h1>

      <input type="text" name="" id="przed" />

      <input type="button" value="Szyfruj" id="akcja" className='przycisk' onClick={pobierzDane}/>

      <h1>Wynik szyfrowania:</h1>

      <p>{PoSzyfrowaniu}</p>
    
    </div>
  )
}

export default App
