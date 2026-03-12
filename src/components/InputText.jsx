
import "./InputText.css"
import Text from "./Text"

function InputText({ handleChange, value, label, id, type, error }) {
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
          className={`input-field ${error ? "input-error" : ""}`}
        />
        {
          error ?
            <Text 
              as="span"
              className="input-error-text"
              text={error}
            />
          : null
        }
    </div>
  )
}

export default InputText