import './style.css'

const Input = ({ Icon, iconText, name, ...otherProps }) => (
    <div className="_input">
        { Icon ? <span>{ <Icon /> } {iconText}</span> : null}
        <input name={name} {...otherProps} />
    </div>
)

export default Input