import React from 'react';
import Mylist from '../components/shared/List';
import { setMockUsers } from './UserTable';

const users = setMockUsers();
function UserList() {
  return (
    <Mylist
      data={users}
    />
  );
}

export default UserList;
