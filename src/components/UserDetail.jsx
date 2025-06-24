import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../services/userService';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getUserById(id)
      .then(res => setUser(res.data))
      .catch(() => setError('Error al obtener detalles del usuario.'));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Cargando...</p>;

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Ciudad: {user.address.city}</p>
      <p>Dirección: {user.address.street}, {user.address.suite}</p>
      <p>Empresa: {user.company.name}</p>
      <p>Sitio Web: {user.website}</p>

      <button className="btn-back" onClick={() => navigate('/')}>
        ← Volver
      </button>
    </div>
  );
}

export default UserDetail;
