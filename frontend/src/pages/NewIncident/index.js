import React from 'react';
import { FiArrowLeft } from 'react-icons/fi' // Feather Icons
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">

      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Título do caso" />
          <textarea cols="30" rows="4" placeholder="Descrição"></textarea>
          <button className='btn-red' type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}