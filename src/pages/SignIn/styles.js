import styled from 'styled-components';

import backgroundImg from '../../assets/background.png.png';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

> h1 {
  font-size:  48px;
  color: ${({ theme }) => theme.COLORS.WHITE};
}

h2 {
  font-size: 24px;
  margin: 48px 0;
 }

> p { 
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 10px;
 
}

> a {
  margin-top: 124px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 18px;
  font-weight: 700; 
}
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;



`;