import React from 'react'

const ImageGrid = ({ images, onSelect, selectedImage }) => {
    console.log("heyhey", images)
    return (

        <div>
            {images.map((image, index) => (
                <div
                    class="gridImagesData"
                    onClick={() => onSelect(index)}
                    style={{ border: index === selectedImage ? "solid 1px black" : "solid 1px #eee", cursor: "pointer", width: "50%" }}

                >
                    {image.id}
                    {image.product}
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
