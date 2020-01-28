import styled, { keyframes } from "styled-components";
import wallpaper_home from "../../assets/img/wallpaper_home.png"

export const Page = styled.div `
  width: 100%;
`
export const Header = styled.div `
  height: 100vh;
  background-color: #007C91;
  background-image: url(${wallpaper_home});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  font-family: 'Futura';
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContainerText = styled.div`
  width: 50vh;
  height: 50vh;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: absolute;
  right: 60%;
  h1{
    color: white;
    text-transform: capitalize;
    letter-spacing: 3px;
    line-height: 1.6;
  }

  #work_livre{
    position: absolute;
    margin-top: -40px;
    left: 220px;
  }

  p{
    color: white;
    text-align: left;
  }
  span{
    color: #35344B;
  }


  input, button{
    border: none;
    margin-top: 3vh;
    height: 50px;
    -webkit-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.1);
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.1);
  }

  input{
    border-radius: 5px 0px 0 5px;
    background-color: rgba(255,255,255,0.1);
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 75%;
    &::placeholder {
      color: rgba(255,255,255,0.4)
    }
  }

  button{
    border-radius: 0 5px 5px 0;
    padding: 10px;
    background-color: #009BB5;
    color: #777;
    cursor: pointer;
  }

  button svg{
    width: 40px;
  }

  small{
    margin-top: 15px;
    width: 100%;
    color: rgba(255,255,255,0.4)
  }

  #Caminho_48{
    opacity: 1;
    fill: white;
    animation: ${props => colorChange(1, 0.3, 0.3)} infinite 1s
    linear;
  }

  #Caminho_47{
    opacity: 1;
    fill: white;
    animation: ${props => colorChange(0.3, 1, 0.3)} infinite 1s
    linear;
  }

  #Caminho_46{
    opacity: 1;
    fill: white;
    animation: ${props => colorChange(0.3, 0.3, 1)} infinite 1s
    linear;
  }
`

export const WorkLivreStyle = styled.svg`
  position: absolute;
  margin-top: 2vh;
  left: 23vh;
`

export const Navbar = styled.div `
  position: absolute;
  top: 10px;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 20vh;
    margin-left: 20px;
  }

  ul {
    list-style-type: none;
    margin-right: 20px;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 10px 16px;
    text-decoration: none;
  }

  li a:hover{
    color: white;
    text-decoration: underline;
  }

  .active {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    
  }
`

const colorChange = (opacityOne, opacityTwo, opacityThree) => keyframes`
0% {
  opacity:${opacityOne};
}
50% {
  opacity:${opacityTwo};
}
100%{
  opacity:${opacityThree};
}
`;

