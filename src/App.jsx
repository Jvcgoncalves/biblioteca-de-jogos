import { useState } from 'react'
import './sass/style.scss'

function App() {
  const [games, setGames] = useState(() =>{
    const storageGames = JSON.parse(localStorage.getItem("obc-game-lib"))

    console.log(storageGames ?? [])
    return storageGames ?? []
  })
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    addGame({title,cover})
    setCover("")
    setTitle("")
  }

  const addGame = ({title,cover}) =>{
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}

    setGames(state => {

      const newState = [...state, game]

      localStorage.setItem("obc-game-lib", JSON.stringify(newState))

      return newState
    })
  }

  const removeGame = (id) =>{
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))

      return newState
    })
  }

  return (
    <>
      <div id='app' className='container'>
        <h1>Biblioteca de Jogos</h1>
        <form className='row' onSubmit={handleSubmit}>
          <div className='col-4'>
            <label htmlFor="title">Título:</label>
            <input
            autoComplete="on" 
            type="text" 
            id='title' 
            className='form-control mb-0' 
            value={title}
            onChange={(e)=> setTitle(e.target.value) }
            />
          </div>
          <div className='col-4'>
            <label htmlFor="cover">Título:</label>
            <input
            autoComplete="on" 
            type="text" 
            id='cover' 
            className='form-control mb-0' 
            value={cover}
            onChange={(e)=> setCover(e.target.value) }
            />
          </div>
          <button type='submit' className='btn btn-success col-auto'> 
            Adicionar a biblioteca
          </button>
        </form>
      </div>
      <div className="text-light d-grid games-box container gap-3 mt-5">
        {
          games.map((game) => {
            console.log(game)
            return (
              <div key={game.id} className="card">
                <img src={game.cover} alt="" className="card-img-left"/>
                <div className="card-body d-grid">
                  <h2 className="card-title">{game.title}</h2>
                  <button className="btn btn-primary align-self-center"
                  onClick={() => removeGame(game.id)}
                  >Remover</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
