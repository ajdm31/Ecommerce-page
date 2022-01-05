import React, { useState, useEffect } from 'react';
import { sofaBlanco } from "../assets/images/images";

const ImageData = [
    {
        id: '01',
        image: sofaBlanco,
        name: "Michael W.Dreeben",
        product: "Leaving Room Sofa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    }
]


const Home = ({ path }) => {
    const [displayList, setDisplayList] = useState(false)
    const [displayImg, setDisplayImg] = useState(false)
    const [displayFooter, setDisplayFooter] = useState(false)

    useEffect(() => {
        if (path === '#t2') {
            setDisplayFooter(true)
            handleInfoContEffect(path)
        } else {
            setDisplayFooter(false)
            handleInfoContEffect(path)
        }
        handleEffect()
    })


    const handleClick = () => {
        setDisplayList(!displayList)
        if (displayList === true) {
            handleEffect(true)
            setDisplayImg(false)
        }
        else {
            handleEffect(false)
        }
    }


    const handleShowImg = () => {
        setDisplayImg(!displayImg)
        if (displayImg === true) {
            setTimeout(() => {
                document.getElementById("ImgContainerHome").style.opacity = 1;
                document.getElementById("ImgContainerHome").style.transition = "opacity 2s ease";
            }, 1000);
        }
        else {
            document.getElementById("ImgContainerHome").style.opacity = 0;
            document.getElementById("ImgContainerHome").style.transition = "opacity 0s ease";
        }
    }

    const handleInfoContEffect = (value) => {
        if (value === '#t2') {
            setTimeout(() => {
                document.getElementById("infoContainerHome").style.opacity = 1;
                document.getElementById("infoContainerHome").style.transition = "opacity 2s ease";
            }, 1000);
        }
        else {
            document.getElementById("infoContainerHome").style.opacity = 0;
            document.getElementById("infoContainerHome").style.transition = "opacity 0s ease";
        }
    }

    const handleEffect = (value) => {
        if (value === false) {
            document.getElementById("list").style.opacity = 0;
            document.getElementById("list").style.transition = "opacity 0s ease";

        } else {
            setTimeout(() => {
                document.getElementById("list").style.opacity = 1;
                document.getElementById("list").style.transition = "opacity 1.5s ease";
                document.getElementById("ImgContainerHome").style.opacity = 1;
                document.getElementById("ImgContainerHome").style.transition = "opacity 1.50s ease";
            }, 500);
        }
    }

    return (
        <div >
            <div class="nav-center-home">
                <div class="nav-header-home">
                    <p>
                        mater
                    </p>
                </div>
            </div>
            <div class="gridImages" >
                <div class="infoContainerHome" id='infoContainerHome'>
                    <div           >
                        <h4 onClick={() => handleClick()}>Collection</h4>
                        <div
                            id='list'
                            style={{ display: displayList === true ? 'block' : 'none' }}
                        >
                            <ul onClick={() => handleShowImg()}>Furniture</ul>
                            <ul>Lighting</ul>
                            <ul>Accessories</ul>
                        </div>
                        <h4>Design</h4>
                        <h4>Craftmanship</h4>
                        <h4>Ethics</h4>
                    </div>

                    <footer class="footer" style={{ display: displayFooter === true ? 'block' : 'none' }}>
                        <div  >
                            {ImageData.map((image, index) => (
                                <div
                                    class="gridImagesData"
                                >
                                    <div id="row1">
                                        <p>About </p>
                                        <p>Contact</p>
                                        <p>Dealers</p>
                                    </div>
                                    <div id="row2">
                                        <p>News</p>
                                        <p>Care</p>
                                        <p>Press</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </footer>
                </div>

                <div class="MainImgContainerHome" >
                    <div >
                        <div >
                            <div id="ImgContainerHome"
                                key={0}
                                style={{ display: displayImg === true ? 'block' : 'none' }}
                            >
                                <img src={ImageData[0].image} alt='travel image' className='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
