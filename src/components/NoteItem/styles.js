
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BACKGROUND_900}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;


  > button {
    border: none;
    background: none;
  }

  // button less and more
  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};   
    font: bold; 
    font-size: 18px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.RED};   
    font: bold; 
    font-size: 18px;
  }


  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background: transparent;
    font-weight: 700; 

    border: none;

    &::placeholder { 
      color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
  }

`;