
import "./InputText.css"
import Text from "./Text"

function InputText({ handleChange, value, label, id, type }) {
  return (
    <div className="input-wrapper">
        <Text 
          as="label"
          className="input-label"
          text={label}
          prop={{
            htmlFor: id
          }}
        />
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