import styled from 'styled-components';
import { Field } from 'formik';

export const StyledPhoneBook = styled.div`
  width: 400px;
  margin: auto;
  padding: 30px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid darkgray;
  border-radius: 15px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 8px;
`;

export const StyledField = styled(Field)`
  padding: 8px;
  width: 100%;
  border: 1px solid darkgray;
  border-radius: 5px;
`;

export const FormBtn = styled.button`
  width: 150px;
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