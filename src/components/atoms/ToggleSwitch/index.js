import './style.css'

const ToggleSwitch = ({...props}) => (
    <label className="_switch">
        <input type="checkbox" {...props}/>
        <span className="_switch-slider"></span>
    </label>
)

export default ToggleSwitch