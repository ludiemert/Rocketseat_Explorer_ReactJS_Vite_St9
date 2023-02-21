import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.WHITE};

  border: none;
  font-size: 18px;
  padding: 16px;
`;  