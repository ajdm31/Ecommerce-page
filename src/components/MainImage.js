import React from 'react'

const MainImage = ({ src }) => {

    return (
        <div >
            <img

                src={src} alt="image" style={{ width: "400px", height: "400px" }} />
        </div>
    )
}

export default MainImage
