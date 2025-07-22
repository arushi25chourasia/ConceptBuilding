import { useEffect, useState } from 'react';

const useUsersList = (URL) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = () => {
      fetch(URL)
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
  }, [URL]);

  return { users, loading };
};

export default useUsersList;
