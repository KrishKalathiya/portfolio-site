import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectsPage from './pages/ProjectsPage';
import ProfessionalDevelopment from './pages/ProfessionalDevelopment';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />
        <SocialSidebar />
        <div id="content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/professional-development" element={<ProfessionalDevelopment />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
