import React from 'react'
import './heading.scss'

const Heading = ({text}) => {
    return (
        <div className="heading-container">
            <h1 className='text-center'>{text}</h1>
        </div>
    )
}
export default Heading;