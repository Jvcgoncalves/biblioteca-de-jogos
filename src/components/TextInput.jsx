import PropTypes from "prop-types";

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  setValue: PropTypes.func
}

export default function TextInput({value, setValue,label}){


  return (
    <div className='col-4'>
      <label htmlFor={label} >{label}</label>
      <input
      autoComplete="on" 
      type="text" 
      id={label} 
      className='form-control mb-0' 
      value={value}
      onChange={(e)=> setValue(e.target.value) }
      />
    </div>
  )
}