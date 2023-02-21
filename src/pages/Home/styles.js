import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";  

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  `;
  

 export const Brand  = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE}; 
    }
 `;

 export const Menu  = styled.ul`
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    padding-top: 64px;
    font-weight: bold;
    
    
    
    text-align: center;

    > li{
    color: ${({ theme }) => theme.COLORS.WHITE}; 
        
    }
    
 `;

 export const Search  = styled.div`
    grid-area: search;
    font-weight: bold;
    padding: 64px 64px 0;
    
 `;

 export const Content  = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto; //Page Scroll
    
 `;

 export const NewNote = styled(Link)`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
    border: none;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      margin-right: 8px;
    }

       
 `;
