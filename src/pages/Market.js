import React, { useState } from 'react';
import MainImage from '../components/MainImage';
import Info from '../components/Info';
import ImageGrid from '../components/ImageGrid';
import { sillaNegra, mesaNegra } from "../assets/images/images";


const ImageData = [
    {
        id: '01',
        image: sillaNegra,
        name: "Michael W.Dreeben",
        product: "Shell Dining Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        id: '02',
        image: mesaNegra,
        name: "Jeaper K.Thomas",
        product: "Dunes Anthrazite Black",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
]

const Market = () => {

    const [selectedImage, setselectedImage] = useState(0)
    console.log("A VER: ", ImageData[selectedImage].image);

    return (
        <>
            <div class="gridImages">
                <div class="infoContainer">
                    <Info {...ImageData[selectedImage]} />
                </div>

                <div class="MainImgContainer">
                    <MainImage src={ImageData[selectedImage].image} />
                </div>
            </div>
            <div >
                <ImageGrid images={ImageData} onSelect={setselectedImage} selectedImage={selectedImage} />
            </div>
        </>
    )
}

export default Market
