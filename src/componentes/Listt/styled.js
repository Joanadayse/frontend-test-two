import styled from "styled-components";

export const Container=styled.div`
 display: grid;
 grid-template-columns: 1fr  ;
  justify-items: center;
  margin: 0 auto; 
  width: 40%;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 5%;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 375px) {
   grid-template-columns: 1fr ;
  max-width: 30%;

   }





`