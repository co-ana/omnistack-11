import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi' // Feather Icons
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, APAD</span>

        <Link className='btn-red' to='/incidents/new'>Cadastrar novo caso</Link>
        <button>
          <FiPower size={18} color="E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong className='text-uppercase'>Caso:</strong>
          <p>Caso teste</p>

          <strong className='text-uppercase'>Descrição:</strong>
          <p>Descrição teste</p>

          <strong className='text-uppercase'>Valor:</strong>
          <p>R$ 120,00</p>

          <button type='button'>
            <span className='sr-only'>Delete</span>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong className='text-uppercase'>Caso:</strong>
          <p>Caso teste</p>

          <strong className='text-uppercase'>Descrição:</strong>
          <p>Descrição teste</p>

          <strong className='text-uppercase'>Valor:</strong>
          <p>R$ 120,00</p>

          <button type='button'>
            <span className='sr-only'>Delete</span>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
        <li>
          <strong className='text-uppercase'>Caso:</strong>
          <p>Caso teste</p>

          <strong className='text-uppercase'>Descrição:</strong>
          <p>Descrição teste</p>

          <strong className='text-uppercase'>Valor:</strong>
          <p>R$ 120,00</p>

          <button type='button'>
            <span className='sr-only'>Delete</span>
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>
        </li>
      </ul>
    </div>
  );
}