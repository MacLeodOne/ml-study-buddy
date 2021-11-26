/* eslint-disable prettier/prettier */
import React from 'react';
import {users} from 'data/users';
import UsersLiestItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

class UsersList extends React.Component{
    state = {
        isUsersList: true,
    }
    toglleListTitle = () => {
        this.setState((prevState) => ({isUsersList: !prevState.isUsersList}));
    };
    render () {
        return (
                <Wrapper>
                    <h1>{ this.state.isUsersList ? `User's List` : 'Studenst list'} </h1>
                    
                    <button onClick= { this.toglleListTitle }> Change Title</button>
                        <ul>
                            {/* {users.map(({ name, average, attendance})=> (
                                <UsersLiestItem name={name} averange={average} attendance={attendance} />
                            ))} */}

                            {users.map((userData) => (
                            <UsersLiestItem key= {userData.name} userData={userData} />
                            ))}
                        </ul>
                    </Wrapper>

        );
    }
} 


export default UsersList;
