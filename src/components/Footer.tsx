import '../styles/footer.css';

import logoImg from '../assets/logo.svg';
import twitterImg from '../assets/icons/twitter-icon.svg';
import instagramImg from '../assets/icons/instagram-icon.svg';
import whatsappImg from '../assets/icons/whatsapp-icon.svg';
import facebookImg from '../assets/icons/facebook-icon.svg';
import googleImg from '../assets/icons/google-icon.svg';

export function Footer() {
  return (
    <footer>
      <img src={logoImg} alt="Santa Logo" />
      <ul className="icons">
        <li>
          <img src={twitterImg} alt="twitter" />
        </li>
        <li>
          <img src={whatsappImg} alt="WhatsApp" />
        </li>
        <li>
          <img src={instagramImg} alt="Instagram" />
        </li>
        <li>
          <img src={facebookImg} alt="Facebook" />
        </li>
        <li>
          <img src={googleImg} alt="Google" />
        </li>
      </ul>
    </footer>
  );
}
