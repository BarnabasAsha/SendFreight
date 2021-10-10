import './style.css'

const ServiceCard = ({ type, Icon }) => {
    return (
        <div>
            <input className="service-input" type="radio" id={type} name="service" />
            <label htmlFor={type} className="_serviceCard">
                <span className="text">{ type }</span>
            <span>
                <Icon />
            </span>
            </label>
        </div>
    )
}

export default ServiceCard