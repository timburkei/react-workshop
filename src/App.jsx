// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { demos, exercises } from './routeConfig';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>28.05.2024 - React Workshop</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            {demos.map((demo, index) => (
              <Route key={index} path={demo.path} element={demo.component} />
            ))}
            {exercises.map((exercise, index) => (
              <Route key={index} path={exercise.path} element={exercise.component} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Navigation() {
  return (
    <div className="navigation">
      <nav className="menu">
        <h2>Demos</h2>
        <ul className="nav-list">
          {demos.map((demo, index) => (
            <li key={index} className="nav-item">
              <Link to={demo.path} className="nav-link">{demo.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="menu">
        <h2>Aufgaben</h2>
        <ul className="nav-list">
          {exercises.map((exercise, index) => (
            <li key={index} className="nav-item">
              <Link to={exercise.path} className="nav-link">{exercise.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
