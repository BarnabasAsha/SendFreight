import './style.css'

const Text = ({ children, type, weight, display }) => (
    <p className={`_text ${type} ${weight} ${display}`}>{children}</p>
)

export default Text