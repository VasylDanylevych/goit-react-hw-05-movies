import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;
  margin-top: 25px;
`;

export const FormEl = styled.form`
  padding: 0 16px;
  margin-top: 25px;
  & button {
    background-color: #dc143c;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    width: 120px;
    height: 40px;
    font-weight: 500;
    font-size: 18px;
    margin-left: 25px;
  }
  & button:active {
    background-color: #c0c0c0;
  }
`;

export const Input = styled.input`
  height: 35px;
  padding-left: 20px;
  border-radius: 4px;
  font-size: 15px;
  width: 300px;
`;
