import React from 'react';
// import {Global, css} from '@emotion/core';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing:border-box;
    margin:0;

    margin:0;
    color: #333;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI',
     Roboto, Helvetica, Arial, sans-serif;
    font-size:18px;
    line-height: 1.4;

    & + * {
        margin-top:1rem;
    }
`

const Layout = ({ children }) => (
    <>
        <Wrapper>
        
        <header></header>
        <main>{children}</main>
        </Wrapper>
       
    </>
);

export default Layout;