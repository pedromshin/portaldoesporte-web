import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pages from './pages';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Pages />);
} else {
  console.error('Root element not found');
}
