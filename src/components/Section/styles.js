import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 2px ;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    font-size: 20px;
    font-weight: 16px;
  }
`;