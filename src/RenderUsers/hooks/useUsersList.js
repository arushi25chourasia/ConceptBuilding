import { useEffect, useState } from 'react';
import { SHORT_USER_LIST } from '../../publicURLs/publicApis/users';

const useUsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = () => {
      fetch(SHORT_USER_LIST)
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log('response :', res);
          setUsers(res);
          setLoading(false);
        })
        .catch(er => {
          console.log(er);
          setLoading(false);
        });
    };

    fetchUsers();
  }, []);

  return { users, loading };
};

export default useUsersList;
