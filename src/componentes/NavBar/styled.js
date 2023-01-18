import styled from "styled-components";

export const Container=styled.nav`

display: flex;
padding: 20px;
background-color:black ;
justify-content: space-between;
width: 98%;
margin: 0 auto;
color: white;
align-items: center;
border: 1px solid #444343;
font-size: 40px;


@media (max-width: 375px) {
    min-width: 630px;
    flex-wrap: wrap;
justify-content: center;
  

   }

   .checkbox {
  opacity: 0;
  position: absolute;
}


.checkbox:checked + .label .ball{
  transform: translateX(24px);
}



.span{  

display: flex;
padding-top: 20px;
padding-left: 60px;
padding-right: 10px;


}




`