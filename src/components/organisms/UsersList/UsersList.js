/* eslint-disable prettier/prettier */
import React from 'react';
import {users} from 'data/users';
import styled from 'styled-components';
import UsersLiestItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';




const UsersList = () => (
<Wrapper>
        <ul>
            {users.map((userData) => (
            <UsersLiestItem key= {userData.name} userData={userData} />
            ))}
        </ul>
    </Wrapper>
);

UsersList.propTyps = {};

export default UsersList;
