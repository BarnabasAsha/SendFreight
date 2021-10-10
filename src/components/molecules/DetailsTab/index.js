import React, { useState } from 'react'
import './style.css'

const DetailsTab = () => {
    const [activeTab, setActiveTab] = useState(0)

return (
    <div className="_detailsTab">
        <button type="button" onClick={() => setActiveTab(0)} className={`${activeTab === 0 ? 'active' : null}`}>Total Dimensions</button>
        <button type="button" onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'active' : null}`}>Package Details</button>
    </div>
)
}

export default DetailsTab