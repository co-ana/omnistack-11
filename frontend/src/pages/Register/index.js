import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Feather Icons
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) { // e == evento do formulário
    e.preventDefault(); // Tira o refresh default depois que clicar no botao de enviar form

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/'); // Após o cadastro, redireciona user para home

    } catch(err) {
      alert('Erro no cadastro, tente novamente.');
      console.log(data);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="backlink" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form action="" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)} // vai "ouvir" as mudanças e atribuir à var. name
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={whatsapp}
            placeholder="Whatsapp"
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              value={city}
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              value={uf}
              placeholder="UF" style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className='btn-red' type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}