import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    transition: all 0.20s linear;
    font-family: Arial, Helvetica, sans-serif;
}

.lastbutton{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.fundoInput};
    margin-bottom: 10%;
    border-radius: 8px;
    border: 1px solid #444343;
    cursor: pointer;
    width: 60%;
    padding: 10px;
    &:hover{
       opacity: 0.6;
    }

}


.inputName{
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    width: 300px;
    background-color: ${({ theme }) => theme.fundoInput};
  height: 20px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
 }

 .select{
    color: ${({ theme }) => theme.text};
  width: 300px;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
 font-size: 20px;
 background-color: ${({ theme }) => theme.fundoInput};

}

.icons{
    margin-right:50px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 20px;
    width: 20px;
    border-radius: 20%;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.fundoInput};
  border-radius: 8px;
  border: 1px solid #444343;
}

.content{
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.fundoInput};
  line-height : 20px ;
    font-weight: bold;
   margin: 0 auto;
 margin-top: 20px;
 text-align: center;
 margin-bottom: 10px;

}


.allCards{
  display: grid;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.fundoInput};
  transform-style: preserve-3d;
  
    border-radius: 20px;
    filter: drop-shadow(0 0 0.4em #6795BC);
    :hover{
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      }

 
 }

.endScreen{ max-width: 800px;
    margin: 0 auto;
    margin-top: 20%;
    text-align: center;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.fundoInput};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: x-large;
}



.counter{
  color: ${({ theme }) => theme.text};
    margin-right: -50px;
    margin-top: 30px;
    z-index: 10;
    font-weight: bold;
    list-style: none;
    font-size: 20px;
}


 .buttonFinish{
  color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.fundoInput};
    margin-bottom: 10%;
    border-radius: 8px;
    border: 1px solid #444343;
    cursor: pointer;
    width: 60%;
    padding: 10px;
    &:hover{
       opacity: 0.6;
    }

}

 .botao{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.fundoInput};
  border-radius: 8px;
  border: 1px solid #444343;
  font-size: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  &:hover{
       opacity: 0.6;
    }

}




.butonList{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.fundoInput};
    /* margin-bottom: 10%; */
    border-radius: 8px;
  /* margin-left: 100%;
  margin-top: 40px; */
  border: 1px solid #444343;
 position: fixed;
 bottom: 2%;
 
    cursor: pointer;
    width: 60%;
    padding: 10px;
    &:hover{
       opacity: 0.6;
    }

    @media (max-width: 375px) {
  margin: 0 auto;
  margin-top: 20%;


   }

}

.label {
    margin-top: 40px;
    margin-right: 10px;
  width: 54px;
  height: 26px;
  background-color: ${({ theme }) => theme.fundoInput};
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transform: scale(1.5);
  border: 1px solid #444343;
  border-radius: 5px;
}

.ball {
  width: 30px;
  height: 23px;
  background-color: ${({ theme }) => theme.fundoInput};
  position: absolute;
  top: 2px;
  border-radius: 20%;
  transition: transform 0.2s linear;
}

.fa-moon {

  color: ${({ theme }) => theme.text};
}

.fa-sun {

  color: ${({ theme }) => theme.text};
}

`;
