import React, { useState, useEffect } from 'react';
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

    const [selectedImage, setSelectedImage] = useState(0)
    const length = ImageData.length;
    console.log("ImageData length: ", length);

    useEffect(() => {

        let timeout = setTimeout(() => {
            console.log('heyhey1');
            document.getElementById("infoText").style.opacity = 1;
            document.getElementById("infoText").style.transition = "opacity 1s ease";
            let displayImg = document.getElementById("ImgContainer").style.opacity = 1
            displayImg = document.getElementById("ImgContainer").style.transition = 'opacity 1s ease'
        }, 500);

    }, [])

    const handleEffect = () => {

        document.getElementById("infoText").style.opacity = 0;
        document.getElementById("infoText").style.transition = "opacity 0s ease";
        let displayImg = document.getElementById("ImgContainer").style.opacity = 0
        displayImg = document.getElementById("ImgContainer").style.transition = 'opacity 0s ease'
        let timeout = setTimeout(() => {
            console.log('heyhey1');
            document.getElementById("infoText").style.opacity = 1;
            document.getElementById("infoText").style.transition = "opacity 1s ease";
            displayImg = document.getElementById("ImgContainer").style.opacity = 1
            displayImg = document.getElementById("ImgContainer").style.transition = 'opacity 1s ease'
        }, 500);

    }

    const nextSlide = () => {

        if (selectedImage === length - 1) {
            return
        }
        setSelectedImage(selectedImage === length - 1 ? 0 : selectedImage + 1);
        console.log("value: ", selectedImage);

    }

    const prevSlide = () => {

        if (selectedImage === 0) {
            return
        }
        setSelectedImage(selectedImage === 0 ? length - 1 : selectedImage - 1);
        console.log("value: ", selectedImage);

    }
    const handleMouseWheel = (event) => {
        handleEffect()
        if (event.nativeEvent.wheelDelta > 0) {
            console.log('scroll up');
            nextSlide()
        } else {
            console.log('scroll down');
            prevSlide()
        }
    }

    console.log('valor de selectedImage: ', selectedImage);


    return (
        <div >
            <div class="gridImages" onWheel={handleMouseWheel}>
                <div class="infoContainer">
                    <div
                        id='infoText'
                    >
                        <p>{ImageData[selectedImage].name}</p>
                        <h3>{ImageData[selectedImage].product}</h3>
                        <p>{ImageData[selectedImage].description}</p>
                    </div>
                    <button id='detailsBtn'>Product Details</button>
                </div>

                <div class="MainImgContainer">
                    <div >
                        <div >
                            <div id="ImgContainer"
                                className={'slide'}
                                key={selectedImage}
                            >
                                <img src={ImageData[selectedImage].image} alt='travel image' className='image' />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div  >
                    {ImageData.map((image, index) => (

                        <div

                            class="gridImagesData"
                            onClick={() => {
                                setSelectedImage(index);
                                handleEffect();
                            }}
                            style={{ borderTop: index === selectedImage ? 'solid 2px black' : "solid 1px #eee", color: index === selectedImage ? "black" : " gray" }}
                        >
                            <h6>{image.id}</h6>
                            <h6>{image.product}</h6>
                        </div>

                    ))}
                </div>
            </footer>
        </div >





        // <div >
        //     <div class="gridImages" onWheel={handleMouseWheel}>
        //         <div class="infoContainer">
        //             <Info {...ImageData[selectedImage]} />
        //         </div>

        //         <div class="MainImgContainer">
        //             <div >
        //                 <MainImage src={ImageData[selectedImage].image} />
        //             </div>
        //         </div>
        //     </div>
        //     <footer class="footer">
        //         <ImageGrid
        //             images={ImageData}
        //             onSelect={setSelectedImage}
        //             onIndex={setSelectedIndex}
        //             selectedIndex={selectedIndex}
        //             selectedImage={selectedImage} />
        //     </footer>
        // </div>
    )
}

export default Market
