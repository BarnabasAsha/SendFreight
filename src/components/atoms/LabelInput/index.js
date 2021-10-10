import './style.css'

const LabelInput = ({ label, unit, id, ...props }) => (
    <div className="_labelInput">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} />
        <span>{unit}</span>
    </div>
)

export default LabelInput