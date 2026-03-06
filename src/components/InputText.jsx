
import "./InputText.css"

function InputText({ handleChange, value, label, id, type }) {
  return (
    <div className="input-wrapper">
        <label htmlFor={id} className="input-label">{label}</label>
        <input 
            id={id}
            name={id}
            onChange={handleChange}
            value={value}
            type={type}
            className="input-field"
        />
    </div>
  )
}

export default InputText