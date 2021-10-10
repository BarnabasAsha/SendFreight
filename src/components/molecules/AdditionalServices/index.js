import Flex from '../../molecules/Flex'
import Text from '../../atoms/Text'
import ToggleSwitch from '../../atoms/ToggleSwitch'
import './style.css'

const AdditionalServices = ({ title, subtitle, name }) => (
    <div className="_additionalService">
        <Flex nowrap="nowrap">
        <ToggleSwitch name={name} aria-label={title} value={title} />
        <div className="_additionalService-info">
           <Text type="normal" weight="bold">{title}</Text>
           <Text type="small">{subtitle}</Text>
        </div>
    </Flex>
    </div>
)

export default AdditionalServices
