import { useState } from 'react'
import './sass/style.scss'

function App() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    setCover("")
    setTitle("")
  }

  return (
    <>
      <div id='app' className='container'>
        <h1>Biblioteca de Jogos</h1>
        <form className='row' onSubmit={handleSubmit}>
          <div className='col-4'>
            <label htmlFor="title">Título:</label>
            <input 
            type="text" 
            id='title' 
            className='form-control mb-0' 
            value={title}
            onInput={(e)=> setTitle(e.target.value) }
            />
          </div>
          <div className='col-4'>
            <label htmlFor="cover">Título:</label>
            <input 
            type="text" 
            id='cover' 
            className='form-control mb-0' 
            value={cover}
            onInput={(e)=> setCover(e.target.value) }
            />
          </div>
          <button type='submit' className='btn btn-success col-auto'> 
            Adicionar a biblioteca
          </button>
        </form>
      </div>
    </>
  )
}

export default App
