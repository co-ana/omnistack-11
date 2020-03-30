import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi' // Feather Icons

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  /* useEffect
   * param1: qual função será executada?
   * param1: aonde será executada? -> Array de dependencias
   */
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);


  async function handleDeleteIncidents(id) {
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      // Após deletar a causa atualiza a página, contendo nova lista de casos;
      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch(err) {
      alert('Erro ao deletar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear(); // Remove o storage! :D
    history.push('/'); // Redirect pra home
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className='btn-red' to='/incidents/new'>Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li
            key={incident.id}
          >
            <strong className='text-uppercase'>Caso:</strong>
            <p>{incident.title}</p>

            <strong className='text-uppercase'>Descrição:</strong>
            <p>{incident.description}</p>

            <strong className='text-uppercase'>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncidents(incident.id)} type='button'>
              <span className='sr-only'>Delete</span>
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}