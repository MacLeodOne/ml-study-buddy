/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const StyleButton = styled.button`
width: 25px;
height: 25px;
background-color: ${(props) => (props.isSecondary ? '#e7e044':'#c0c7d6')};
border-radius:50px;
border:none;
color:white;

`;


const UsersLiestItem = ({userData: {average,name,attendance = '0%' }}) =>(
<Wrapper>

                <div>{average}</div>
                <div>
                    <p> {name}</p>
                    <p>{attendance}</p>
                </div>
                <StyleButton>X</StyleButton>
                <StyleButton isSecondary>X</StyleButton>
            </Wrapper>
);

UsersLiestItem.propTypes = {
    userData:PropTypes.shape({
        average:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        attendance:PropTypes.string,
    }),
};

export default UsersLiestItem;
