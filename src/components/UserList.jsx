import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService.js';
import { Link } from 'react-router-dom';
import UserCard from './UserCard.jsx';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getUsers()
      .then(response => {
        setUsers(response.data);
        setFiltered(response.data);
      })
      .catch(() => setError('Error al cargar los usuarios.'));
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    setFiltered(users.filter(u => u.name.toLowerCase().includes(term)));
  }, [search, users]);

  if (error) return <p>{error}</p>;

      return (
      <div className="container">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="user-list">
          {filtered.map(user => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <UserCard user={user} />
            </Link>
          ))}
        </div>
      </div>
    );
}

export default UserList;
