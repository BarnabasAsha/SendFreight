import './style.css'

const Grid = ({ children, size }) => (
    <div className={`_grid ${size}`}>{children}</div>
)

export default Grid