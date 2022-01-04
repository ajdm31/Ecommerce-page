import React, { useState } from 'react';
import { sofaBlanco } from "../assets/images/images";

const ImageData = [
    {
        id: '01',
        image: sofaBlanco,
        name: "Michael W.Dreeben",
        product: "Shell Dining Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    }
]



const Home = () => {
    const [displayList, setDisplayList] = useState(false)
    const [displayImg, setDisplayImg] = useState(false)

    const handleClick = () => {
        setDisplayList(!displayList)
    }
    const handleShowImg = () => {
        setDisplayImg(!displayImg)
    }

    return (
        <div >
            <div class="gridImages" >
                <div class="infoContainerHome">
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
                    <footer class="footerHome">
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
                    </footer>
                </div>

                <div class="MainImgContainer">
                    <div >
                        <div >
                            <div id="ImgContainer"
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
