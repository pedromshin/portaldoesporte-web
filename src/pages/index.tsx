import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Feed from './feed';
import Following from './following';
import CreateModality from './create-modality';
import PrivacyPolicy from './privacy-policy';

const Pages: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Feed</Link>
            </li>
            <li>
              <Link to="/following">Acompanhando</Link>
            </li>
            <li>
              <Link to="/create-modality">Criar modalidade</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Política de privacidade</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/following" element={<Following />} />
          <Route path="/create-modality" element={<CreateModality />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Pages;
