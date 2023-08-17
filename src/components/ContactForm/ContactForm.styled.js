import styled from 'styled-components';
import { Field, Form } from "formik";

export const Phonebook = styled(Form)`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
border: 4px solid black;
border-radius: 4px;
padding: 10px;
`;

export const Input = styled(Field)`
display: flex;
flex-direction: column;
margin-bottom: 5px;
`;