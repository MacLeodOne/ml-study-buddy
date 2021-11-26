/* eslint-disable prettier/prettier */
import React from 'react';
import {users} from 'data/users';
import UsersLiestItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.styles';


class UsersList extends React.Component{
    state = {
        users: users,
    }
    deleteUser=(name) => {
      const filteredUsers =this.state.users.filter(user => user.name !==name);
      this.setState({users:filteredUsers});  
    };
    render () {
        return (
                <Wrapper>
                    <StyledList>
                    {this.state.users.map((userData) => (
                            <UsersLiestItem deleteUser={this.deleteUser} key= {userData.name} userData={userData} />
                            ))}
                    </StyledList>
                            
                    </Wrapper>

        );
    }
} 


export default UsersList;
