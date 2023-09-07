import styled from 'styled-components';

export const ContItemEl = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    width: 100%;
    border: 1px solid darkgray;
    border-radius: 5px;
    margin-bottom: 4px;
    align-items: center;
`;

export const ContactBtn = styled.button`
  width: 100px;
  padding: 8px 16px;
  border: 1px solid darkgray;
  color: black;
  border-radius: 5px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);
`;