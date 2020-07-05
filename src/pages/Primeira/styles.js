import styled from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;

  h1 {
    font-size: 20px;
    margin: 20px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: center;
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
    margin: 30px auto 120px;
    
    width: 300px;
    height: 51px;
    background: #3483fa;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
`;
