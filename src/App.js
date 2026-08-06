import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <section className="cards-section">
          <div className="container">
            <h2>Welcome to LyteNyte Grid</h2>
            <div className="cards-grid">
              <Card
                title="Component Library"
                description="Build beautiful UIs with our custom component system"
                icon="🎨"
              />
              <Card
                title="Design System"
                description="Consistent styling and spacing across your application"
                icon="🎯"
              />
              <Card
                title="Responsive Layout"
                description="Mobile-first design that works on all devices"
                icon="📱"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 LyteNyte Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;