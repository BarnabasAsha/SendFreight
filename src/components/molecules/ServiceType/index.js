import './style.css'

const ServiceType = () => (
    <div className="_serviceType">
        <div className="_serviceType-input">
            <input type="radio" name="serviceType" id="import" value="import" />
            <label htmlFor="import">Import</label>
        </div>
        <div className="_serviceType-input">
            <input type="radio" name="serviceType" id="export" value="export" />
            <label htmlFor="export">Export</label>
        </div>
    </div>
)

export default ServiceType