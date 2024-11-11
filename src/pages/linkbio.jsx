import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaSearch, FaRegHandshake, FaStore, FaPhoneAlt, FaBlog } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    // Verifique se o código de manipulação do DOM não está tentando acessar algo não definido
    const heading = document.querySelector('.heading');
    if (heading) {
      setTimeout(() => {
        heading.classList.add('visible');
      }, 500);
    }
  }, []);

  return (
    <div className="container-fluid p-0" style={{ height: '100vh', overflow: 'auto' }}>
      <div className="row w-100 m-0 d-flex flex-column flex-md-row">
        {/* Lado esquerdo - fundo roxo */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start p-4" 
             style={{ backgroundColor: '#3b0a45', color: 'white', position: 'relative', height: '100%', overflowY: 'auto' }}>
          {/* Imagem */}
          <img
            src="/logo.PNG"
            alt="Logo"
            className="img-fluid"
            style={{
              width: '140px',
              height: 'auto',
              position: '',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              transition: 'opacity 0.5s ease',
              zIndex: 10, // A imagem não sobrepõe outros elementos
              marginBottom: '20%',
            }}
          />
          <h2 className="heading mt-5" style={{ zIndex: 5, marginTop: '35%', marginBottom: '3%', textAlign: 'left' }}>
            Mtrek: Economize, Ganhe e Realize.
          </h2>
          <p className="text-left" style={{ zIndex: 5, marginBottom: '32.3%' }}>
            Tudo em um só lugar! Conheça a maior plataforma brasileira que transforma suas compras online, conta de energia e mercado local em ganhos. Torne-se membro e comece a fazer a diferença no seu bolso agora mesmo!
          </p>
        </div>

        {/* Lado direito - fundo cinza escuro */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-between p-4" 
             style={{ backgroundColor: '#E6D9FF', height: '100%', overflowY: 'auto', flex: 1 }}>
          {/* Parte superior */}
          <div className="p-4" style={{ backgroundColor: 'white', color: '#333', height: '40%' }}>
            <h3 className="text-center">Economize Mais com a Mtrek.</h3>
            <p className="text-center">Todos os caminhos para economizar e ganhar estão aqui, escolha o seu!</p>
          </div>

          {/* Parte inferior com botões e ícones */}
          <div className="d-flex flex-column justify-content-center align-items-center p-4" 
               style={{ backgroundColor: 'white', borderRadius: '0 8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '80%' }}>
            <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: '300px' }}>
              <a href="/" className="btn btn-dark d-flex align-items-center gap-2">
                <FaStore /> Quero ser Membro
              </a>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaShoppingCart /> Loja Online
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaSearch /> Mercado Livre de Energia
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaRegHandshake /> Mercado Local
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaBlog /> Blog Mtrek
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaPhoneAlt /> Central de Ajuda
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                <FaPhoneAlt /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
