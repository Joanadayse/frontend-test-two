import styled from "styled-components";

export const Main = styled.main`
 display: grid;
 grid-template-columns: 1fr 1fr ;
 grid-template-rows: 1fr 1fr ;
  justify-items: center;
  margin: 0 auto; 
  width: 70%;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 5%;

  @media (max-width: 375px) {
   grid-template-columns: 1fr ;
  max-width: 100%;
  margin: 50%;
  margin-top: 20px;

   }


.contentCards{

    line-height : 30px ;
    font-weight: bold;
   margin: 0 auto;
 margin-top: 20px;

   
 

}


`


export const FilteringContainer=styled.div`
display: flex;
margin: 0 auto;
padding-top: 20px;
padding-left: 35%;
padding-right: 10px;
gap: 40px;

@media (min-width: 370px) {
    flex-wrap: wrap;
  
  }


`