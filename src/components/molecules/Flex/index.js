import './style.css'

const Flex = ({ children, items, content, gutter, nowrap }) => <div className={`_flex ${items} ${nowrap} ${content} ${gutter}`}>{ children }</div>

export default Flex