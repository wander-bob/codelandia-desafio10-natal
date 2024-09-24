import '../styles/header.css';
import logoImg from '../assets/logo.svg';
import storeImg from '../assets/store.svg';
import { Link } from './Link';

export function Header() {
  return (
    <header>
      <div className="content">
        <img src={logoImg} alt="Santa Logo" />
        <h1>
          Uma <span>plataforma de doação</span> para espalhar alegria
        </h1>
        <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
        <Link content="Fazer uma doação" />
      </div>
      <img src={storeImg} alt="Loja" />
    </header>
  );
}
