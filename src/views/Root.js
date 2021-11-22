/* eslint-disable prettier/prettier */
import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme';
export const Wrapper = styled.div`
  background-color:#e7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme ={theme}>
  <GlobalStyle />
  <Wrapper>
    <UsersList/>
  </Wrapper>
  </ThemeProvider>
); 

Root.propTyps = {};

export default Root;