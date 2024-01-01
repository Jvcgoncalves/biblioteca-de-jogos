import { useState } from 'react'
import './sass/style.scss'
import Game from './components/Game'
import NewGameForm from './components/NewGameForm'
import useGameCollection from './hooks/useGameCollection'

function App() {

  const {games,addGame,removeGame} = useGameCollection()

  return (
    <>
      <div id='app' className='container'>
        <h1>Biblioteca de Jogos</h1>
        <NewGameForm addGame={addGame}/>
      </div>
      <div className="text-light d-grid games-box container gap-3 mt-5">
        {
          games.lenght <=0 ? (games.map((game) => (
            <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
            />
          ))) : (
            <h2 className='display-3'>Não há jogos adicionados</h2>
          )
        }
      </div>
    </>
  )
}

export default App
