
import Logo from '../img/logo.png'

const Header = () => {

  return (
    <>
    <nav className="bg-green-800 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse"> 
          <img src={Logo} alt="Logo" className="h-20 w-20" />
        </a>

        <div className="md:flex items-center space-x-1"> 
          <a href="/" className="py-4 px-2 font-semibold text-xl text-white">Inicio</a>

          <a href="/estado" className="py-4 px-2 font-semibold text-xl text-white">Estados</a>

          <a href="/informacion" className="py-4 px-2 font-semibold text-xl text-white">Información</a>
        </div>
        
      </div>
    </nav>
    </>
  );
};

export default Header
