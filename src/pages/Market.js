import React, { useState, useEffect } from 'react';
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

const Market = ({ path }) => {

    const [displayFooter, setDisplayFooter] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)
    const length = ImageData.length;

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("infoText").style.opacity = 1;
            document.getElementById("infoText").style.transition = "opacity 1s ease";
            let displayImg = document.getElementById("ImgContainer").style.opacity = 1
            displayImg = document.getElementById("ImgContainer").style.transition = 'opacity 1s ease'
        }, 500);

        if (path === '/' || path === '#t1') {
            setDisplayFooter(true)
        } else {
            setDisplayFooter(false)
        }
    })

    const handleEffect = () => {
        document.getElementById("infoText").style.opacity = 0;
        document.getElementById("infoText").style.transition = "opacity 0s ease";
        let displayImg = document.getElementById("ImgContainer").style.opacity = 0
        displayImg = document.getElementById("ImgContainer").style.transition = 'opacity 0s ease'
        setTimeout(() => {
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
    }

    const prevSlide = () => {
        if (selectedImage === 0) {
            return
        }
        setSelectedImage(selectedImage === 0 ? length - 1 : selectedImage - 1);
    }

    const handleMouseWheel = (event) => {
        handleEffect()
        if (event.nativeEvent.wheelDelta > 0) {
            nextSlide()
        } else {
            prevSlide()
        }
    }

    return (
        <div >
            <div class="nav-center-market">
                <div class="nav-header-market">
                    <p>
                        mater
                    </p>
                </div>
            </div>
            <div class="gridImages" onWheel={handleMouseWheel}>
                <div class="infoContainer">
                    <div
                        id='infoText'
                    >
                        <p>{ImageData[selectedImage].name}</p>
                        <h3>{ImageData[selectedImage].product}</h3>
                        <p>{ImageData[selectedImage].description}</p>
                    </div>

                    <button class="btn draw-border">Product Details</button>

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


            <footer class="footer" style={{ display: displayFooter === true ? 'block' : 'none' }}>
                <div  >
                    {ImageData.map((image, index) => (
                        <div >

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

                        </div>

                    ))}
                </div>
            </footer >
        </div >

    )
}

export default Market
