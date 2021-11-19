/* eslint-disable prettier/prettier */
import React from 'react';
import {users} from 'data/users';
import UsersLiestItem from 'components/UsersListItem/UsersListItem';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const UsersList = () => (
<Wrapper>
        <ul>
            {users.map((userData) => (
            <UsersLiestItem userData={userData} />
            ))}
        </ul>
    </Wrapper>
);

UsersList.propTyps = {};

export default UsersList;
