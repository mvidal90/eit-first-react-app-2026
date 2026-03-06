
import "./Button.css"

function Button({ label, handleClick, type = "button", color = "primary", variant = "solid" }) {
    return (
        <button
            type={type}
            className={`btn btn-color-${color} btn-${variant}`}
            onClick={handleClick}
        >{label}</button>
    )
}

export default Button