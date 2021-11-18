/* eslint-disable prettier/prettier */
import React from 'react';
import {users} from 'data/users';
import UsersLiestItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
<div>
        <ul>
            {users.map((userData) => (
            <UsersLiestItem userData={userData} />
            ))}
        </ul>
    </div>
);

UsersList.propTyps = {};

export default UsersList;
