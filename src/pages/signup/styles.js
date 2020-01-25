import styled from "styled-components";

export const Body = styled.body`
  background-color: #007184b8 !important; 
`;

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 60vh;
  background: #fff;
  margin: 0 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 10px 15px 5px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 10px 15px 5px 0px rgba(0,0,0,0.2);
  box-shadow: 10px 15px 5px 0px rgba(0,0,0,0.2);
  img {
    width: 75%;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    border-radius: 5px;
    height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #007184;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.1);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.1);
  }
  button:hover{
    background: #3f3d55;
    cursor: pointer;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
  }

  a:hover{
    color: #007184;
  }
`;