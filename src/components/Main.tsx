import { Link } from './Link';

import illustrationImg from '../assets/illustration.svg';
import presentImg from '../assets/present.svg';

import '../styles/main-component.css';

export function Main() {
  return (
    <main>
      <div className="count">
        <div className="content">
          <h2>Tempo limitado</h2>
          <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
        </div>
        <h1>10d -24h - 01m - 52s</h1>
        <img
          src={illustrationImg}
          alt="Presentes"
        />
      </div>
      <div className="presentation">
        <img
          src={presentImg}
          alt="Mãos segurando um enfeite de Natal"
        />
        <div className="content">
          <h2>
            Conectando generosidade <br />
            ao redor do mundo
          </h2>
          <p>
            Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes
            significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito
            da generosidade.
          </p>
          <Link content="FAZER UMA DOAÇÃO" />
        </div>
      </div>
    </main>
  );
}
