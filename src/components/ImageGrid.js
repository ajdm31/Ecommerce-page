import React from 'react'

const ImageGrid = ({ images, onSelect, selectedImage, onIndex }) => {
    // console.log("heyhey", images)
    return (
        <div  >
            {images.map((image, index) => (
                <div

                    class="gridImagesData"
                    onClick={() => {
                        onSelect(index);

                        onIndex(index)
                    }}
                    style={{ borderTop: index === selectedImage ? "solid 2px black" : "solid 1px #eee", color: index === selectedImage ? "black" : " gray" }}
                >
                    <h6>{image.id}</h6>
                    <h6>{image.product}</h6>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
