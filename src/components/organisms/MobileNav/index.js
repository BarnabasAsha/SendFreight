import Search from '../../atoms/Search'
import Button from '../../atoms/Button'
import './style.css'

const MobileNav = () => (
    <div className="_mobileNav">
        <Search size="small" />
        <Button type="outline">Request Quote</Button>
        <Button type="solid">Book Shipment</Button>
    </div>
)

export default MobileNav