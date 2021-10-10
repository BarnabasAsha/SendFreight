import './style.css'

const Button = ({ children, type }) => (
    <button className={`_button ${type}`}>{children}</button>
)

export default Button