import React from 'react'

const Info = ({ name, product, description }) => {
    console.log("this are the values: ", name, product, description)
    return (
        <div >
            <p>{name}</p>
            <h3>{product}</h3>
            <p>{description}</p>
            <button id='detailsBtn'>Product Details</button>
        </div>
    )
}

export default Info
