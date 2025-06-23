import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-1 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
