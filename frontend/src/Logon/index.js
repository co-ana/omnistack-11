import React from 'react';
import { FiLogIn } from 'react-icons/fi' // Feather Icons

import './styles.css';

import logoImg from '../assets/logo.svg';
import heroesImg from '../assets/heroes.png';


export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form action="">
          <input placeholder="Sua ID" type="text"/>
          <button className='btn-red' type="submit">Entrar</button>

          <a href='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}