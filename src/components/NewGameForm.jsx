import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({addGame}) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  function handleSubmit (e) {
    e.preventDefault()
    addGame({title,cover})
    setCover("")
    setTitle("")
  }

  return (
    <form className='row' onSubmit={handleSubmit}>
          <TextInput 
          value={title}
          setValue={setTitle}
          label={`Título`}
          /> 
           <TextInput 
          value={cover}
          setValue={setCover}
          label={`Capa`}
          /> 
          <button type='submit' className='btn btn-success col-auto'> 
            Adicionar a biblioteca
          </button>
        </form>
  )
}