import styled from "styled-components";


export const IntroStyle = styled.div`
  height: 100vh;
  background: #060606 ;

  .App {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    position: relative;
    padding: 100px;
  }

  .logo {
    width: 100px;
    margin-bottom: 30px;
  }
  .title {
    margin-bottom: 30px;
    font-size: 24px;
  }

  .container-buttons  {
    position: absolute;
    margin: 0 auto;
    bottom: 100px;
    display: flex;
    font-size: 12px;
  }

  .slider-container {
    width: 400px;
    height: 200px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: black;
    border: 1px solid white;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .header {
    border: 1px solid white;
    padding: 20px;
    background: #060606;
    color: white;
    display: flex;

    &.active {
      background: white;
      color: black;
      border: 1px solid black;

      .header-menu {
        border: 1px solid black;
      }
    }
  }

  .header-menu {
    border: 1px solid white;
    padding: 20px;
    margin-right: 12px;
  }
`;
