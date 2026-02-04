import React, { useState } from 'react';

// --- DATA ---
import { systemsData, techData } from './data/ranaData';

// --- COMMON COMPONENTS ---
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import TrustBar from './components/common/TrustBar';
import CartSidebar from './components/common/CartSidebar';
import AuthModal from './components/common/AuthModal';

// --- VIEWS ---
import HomeView from './views/HomeView';
import AboutUsView from './views/AboutUsView';
import ContactView from './views/ContactView';
import SystemsCatalogView from './views/SystemsCatalogView';
import SystemDetailView from './views/SystemDetailView';
import TechCatalogView from './views/TechCatalogView';
import TechDetailView from './views/TechDetailView';
import ConsultantPage from './views/ConsultantPage';
import DistributorsView from './views/DistributorsView';
import SupportView from './views/SupportView';
import LegalView from './views/LegalView';
import CheckoutView from './views/CheckoutView';
import { ProfileView } from './views/AuthViews';

// --- ADMIN VIEWS ---
import { MyClientsView, MyDistributorsView, MyProductsView, AdminOrdersView } from './views/AdminViews';

// --- DISTRIBUTOR VIEWS ---
import { DistProductsView, MySubDistributorsView, MyInfoView, DistOrdersView } from './views/DistributorViews';

// --- CLIENT VIEWS ---
import { MyOrdersView, ClientProfileView } from './views/ClientViews';

export default function App() {
  const [view, setView] = useState('home');
  const [activeId, setActiveId] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  // Gemini State
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const callGemini = async (userPrompt) => {
    const apiKey = "AIzaSyBmO6qTow7RVhNv9QTgQM0PkdEoPTV_tf0";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemPrompt = `
        Eres el Consultor de Bio-mimetismo Podal de Rana Walk®.
        Tu objetivo es prescribir el sistema ideal basado exclusivamente en la arquitectura de nuestros 4 sistemas.
        
        CONTEXTO DE LOS SISTEMAS:
        1. GOLIATH (Resiliencia Estructural): Para entornos de ALTA CARGA (personas pesadas o con carga adicional), impacto repetitivo certificado y jornadas industriales de +10-12h. Usa PORON® XRD®. Calzado industrial/táctico.
        2. VELOX (Agilidad de Perfil Bajo): El único para calzado AJUSTADO o de VESTIR. 100% ThinBoom™ (E-TPU supercrítico). Prioriza retorno de energía y agilidad sobre la amortiguación pesada.
        3. ORBIS (Equilibrio Natural): Uso DIARIO URBANO. Chasis LeapCore™ de densidad media. Para el trabajador de oficina o caminante urbano que busca estabilidad postural.
        4. LEOPARD (Estabilidad Adaptable): Para terrenos IRREGULARES (Outdoor ligero) y usuarios con fatiga de arco medial. Tres perfiles de altura dinámica.
        
        REGLAS DE RESPUESTA:
        - Empieza siempre con un análisis breve de las variables Carga e Impacto detectadas en el relato del usuario.
        - Sé directo: Indica qué sistema debe usar y por qué, citando una de nuestras tecnologías (LeapCore™, ThinBoom™, NanoSpread™, etc).
        - Usa un tono de ingeniería biomimética: profesional, preciso, empoderador.
        - No menciones marcas de la competencia, solo el estándar Rana Walk®.
        - Si el usuario menciona problemas médicos graves, recomienda consultar a un especialista además de usar el sistema.
    `;

    const payload = {
      contents: [{
        parts: [{ text: `System Instruction: ${systemPrompt}\n\nUser Query: ${userPrompt}` }]
      }]
    };

    const fetchWithRetry = async (retries = 3, delay = 1000) => {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
      } catch (err) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchWithRetry(retries - 1, delay * 2);
        }
        throw err;
      }
    };

    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchWithRetry();
      setResponse(result);
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el consultor inteligente. Por favor verifica tu conexión o intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const navigate = (newView, id = null) => {
    if (newView === 'login' || newView === 'register') {
      setAuthMode(newView);
      setIsAuthModalOpen(true);
      return;
    }
    setView(newView);
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (selectedUser) => {
    setUser(selectedUser);
    // Navigate to appropriate default view based on role
    const defaultViews = {
      admin: 'myClients',
      distributor: 'distProducts',
      client: 'myOrders'
    };
    navigate(defaultViews[selectedUser.role] || 'home');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('home');
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#75CBB3] selection:text-[#013A57]">
      <Navbar currentView={view} navigate={navigate} cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} user={user} onLogout={handleLogout} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
        onCheckout={() => { setIsCartOpen(false); navigate('checkout'); }}
      />

      <main className={view !== 'home' ? 'pt-24 md:pt-32' : ''}>
        {/* Public Views */}
        {view === 'home' && <HomeView navigate={navigate} />}
        {view === 'about' && <AboutUsView />}
        {view === 'contact' && <ContactView />}
        {view === 'consultor' && (
          <ConsultantPage
            query={query}
            setQuery={setQuery}
            handleConsult={callGemini}
            isLoading={isLoading}
            response={response}
            error={error}
            navigate={navigate}
          />
        )}
        {view === 'systems' && <SystemsCatalogView navigate={navigate} />}
        {view === 'systemDetail' && <SystemDetailView systemId={activeId} navigate={navigate} addToCart={addToCart} />}
        {view === 'tech' && <TechCatalogView navigate={navigate} />}
        {view === 'techDetail' && <TechDetailView techId={activeId} navigate={navigate} />}
        {view === 'distributors' && <DistributorsView />}
        {view === 'support' && <SupportView />}
        {view === 'legal' && <LegalView />}
        {view === 'checkout' && <CheckoutView cartItems={cart} navigate={navigate} />}
        {view === 'profile' && <ProfileView user={user} onLogout={handleLogout} />}

        {/* Admin Views */}
        {view === 'myClients' && <MyClientsView navigate={navigate} />}
        {view === 'myDistributors' && <MyDistributorsView navigate={navigate} />}
        {view === 'myProducts' && <MyProductsView navigate={navigate} />}
        {view === 'adminOrders' && <AdminOrdersView navigate={navigate} />}

        {/* Distributor Views */}
        {view === 'distProducts' && <DistProductsView navigate={navigate} />}
        {view === 'mySubDistributors' && <MySubDistributorsView navigate={navigate} />}
        {view === 'myInfo' && <MyInfoView user={user} />}
        {view === 'distOrders' && <DistOrdersView navigate={navigate} />}

        {/* Client Views */}
        {view === 'myOrders' && <MyOrdersView navigate={navigate} />}
        {view === 'clientProfile' && <ClientProfileView user={user} onLogout={handleLogout} />}
      </main>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        initialMode={authMode}
      />

      <TrustBar />
      <Footer navigate={navigate} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}