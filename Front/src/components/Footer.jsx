import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-green-800 text-white ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contacto</h2>
            <p>Dirección: Cancún, Quintana Roo</p>
            <p>Email: raulmay8@hotmail.com</p>
            <p>Teléfono: 99-84-26-65-44</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Enlaces útiles</h2>
            <ul>
              <li><a href="/estado">Estados</a></li>
              <li><a href="/informacion">Información</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Síguenos</h2>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/profile.php?id=61553636476647&mibextid=ZbWKwL" className="text-white hover:text-gray-300">
                <FaFacebook className='text-3xl'/>
              </a>
              <a href="https://twitter.com/?lang=es" className="text-white hover:text-gray-300">
                <FaXTwitter className='text-3xl'/>
              </a>
              <a href="https://www.instagram.com/" className="text-white hover:text-gray-300">
                <FaInstagram className='text-3xl'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>&copy; 2023 Zonas Arqueológicas de México. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
