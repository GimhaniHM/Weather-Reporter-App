import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
