import './style.css'
import { ReactComponent as Icon } from '../../../assets/search.svg'

const Search = ({ size }) => {
    return (
        <div className={`_search ${size}`}>
            <input type="text" name="Search" id="Search" placeholder="Search" aria-label="Search" />
            <span>
            <Icon />
            </span>
        </div>
    )
}

export default Search