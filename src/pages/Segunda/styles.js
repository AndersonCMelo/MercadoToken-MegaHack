import styled from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
    margin: 20px 20px 10px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }

  p {
    font-size: 16px;
    margin: 0 20px 70px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }

  .error {
    margin-left: 20px;
    color: red;
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  background: #00B1EA;
  padding: 30px 0;

  img {
    width: 120px;
  }
`;

export const Inputs = styled.form`
  display: flex;
  flex-direction: column;

  padding: 10px 20px;

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      color: #fff;
    }
  }

  .buttonField {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 30px auto 40px;
    
    width: 300px;
    height: 51px;
    background: #3483fa;
    color: #fff;
    border: none;
    border-radius: 5px;
  }

  .mt {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
    width: 120px;
  }
`;
