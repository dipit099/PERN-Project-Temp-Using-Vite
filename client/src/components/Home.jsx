import React from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to My Website</h1>
        <p className="home-subtitle">A place to explore and discover</p>
      </header>
      <main className="home-content">
        <section className="home-introduction">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            This is a simple demo homepage to showcase styling using React and CSS.
            Feel free to explore and learn more about how to style components with proper class names.
          </p>
        </section>
        <section className="home-features">
          <h2 className="section-title">Features</h2>
          <ul className="features-list">
            <li className="feature-item">Fast and responsive design</li>
            <li className="feature-item">Easy to customize</li>
            <li className="feature-item">Built with React and CSS</li>
          </ul>
        </section>
      </main>
      <footer className="home-footer">
        <p className="footer-text">© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
