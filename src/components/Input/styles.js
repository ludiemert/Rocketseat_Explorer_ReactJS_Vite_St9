import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
 // color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    background: transparent;
    border: 0;
    font-weight: bold;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }

  > svg {
      margin-left: 16px;
      color:${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

`;