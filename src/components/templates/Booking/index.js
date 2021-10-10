import './style.css'

// svgs
import { ReactComponent as Flight } from '../../../assets/flight.svg'
import { ReactComponent as Officer } from '../../../assets/officer.svg'
import { ReactComponent as Ship } from '../../../assets/ship.svg'
import { ReactComponent as Truck } from '../../../assets/truck.svg'
import { ReactComponent as Location } from '../../../assets/location.svg'
import { ReactComponent as Info } from '../../../assets/info.svg'
import { ReactComponent as Arrow } from "../../../assets/arrowLeft.svg"

// components
import Text from '../../atoms/Text'
import Section from '../../organisms/Section'
import ServiceCard from '../../molecules/ServiceCard'
import Flex from '../../molecules/Flex'
import Input from '../../atoms/Input'
import SelectInput from '../../atoms/SelectInput'
import ToggleSwitch from '../../atoms/ToggleSwitch'
import LabelInput from '../../atoms/LabelInput'
import AdditionalServices from '../../molecules/AdditionalServices'
import Grid from '../../molecules/Grid'
import ServiceType from '../../molecules/ServiceType'
import DetailsTab from '../../molecules/DetailsTab'
import DateInput from '../../atoms/DateInput'

const services = [
    {
        type: "Air Freight",
        Icon: Flight
    },
    {
        type: "Sea Freight",
        Icon: Ship
    },
    {
        type: `Inland (Truck & Barge)`,
        Icon: Truck
    },
    {
        type: "Customs Clearance",
        Icon: Officer
    },
]

const additionalServices =  [
    {
        title: "Export Forwarding",
        subtitle: "We handle customs clearance and documentation.",
        name: "exportForwarding"
    },
    {
        title: "Import Customs Clearance",
        subtitle: "We handle import customs and regulatory requirements.",
        name: "customsClearance"
    },
    {
        title: "Cargo Insurance",
        subtitle: "Protect your cargo from logistics risks up to its full value",
        name: "cargoInsurance"
    },
    {
        title: "Transport/Delivery",
        subtitle: "We deliver the cargo to your door step from the ports",
        name: "transportDelivery"
    },
]
const Booking = () => {
    
    return (
        <div className="_wrapper">
            <div className="_wrapper-icon">
                <Arrow />
            </div>
            <section>
                <header>
                    <h1 className="_heading-1x">New Booking</h1>
                    <Text type="normal">Fill in the information below to get a quote or create a new booking</Text>
                </header>

                <form>
                <Section>
                    <h2 className="_heading-2x">Select a service</h2>
                    <Grid>
                        {
                            services.map( (service, index) => <ServiceCard key={index} {...service} />)
                        }
                    </Grid>
                </Section>
                <Section>
                    <button type="button" className="_booking-info">
                        <Info />
                    </button>
                    <div>
                        <Flex items="items-center" content="content-between">
                            <ServiceType />
                            <Input Icon={Location} iconText="From" type="text" name="locationFrom" id="locationFrom" placeholder="City or port" aria-label="From" />
                            <Input Icon={Location} iconText="To" type="text" name="locationTo" id="locationTo" placeholder="City or port" aria-label="To" />
                            <DateInput />
                            <SelectInput />
                            <Input type="text" name="cargoValue" id="cargoValue" placeholder="Total Cargo Value" aria-label="Cargo Value" />
                        </Flex>
                    </div>
                </Section>
                <Section>
                    <Flex content="content-between" items="items-center" gutter="gutter">
                       <h2 className="_heading-2x no-margin rmargin">Cargo Details</h2>
                       <Flex items="items-center" nowrap="nowrap">
                        <ToggleSwitch aria-label="Dangerous Chemicals" name="dangerousChemicals" value=
                        "Dangerous Chemicals" />
                        <Text type="normal" weight="bold" display="inline">Dangerous Cargo (ex. Chemicals, Battery)</Text>
                       </Flex>
                    </Flex>
                    <div>
                        <DetailsTab />
                    </div>
                    <Flex>
                        <LabelInput label="Total Volume" unit="cbm" id="totalVolume" name="totalVolume" />
                        <LabelInput label="Total Weight" unit="kg" id="totalWeight" name="totalWeight" />
                    </Flex>
                </Section>

                <Section>
                <h2 className="_heading-2x">Additional Services</h2>
                <Flex content="content-between">
                    {
                        additionalServices.map( (service, index) => (
                            <AdditionalServices key={index} {...service} />
                        ))
                    }
                </Flex>
                </Section>
                </form>
            </section>
        </div>
    )
}

export default Booking