import ReactDOM from 'react-dom/client';
import Launcher from './launcher';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Launcher/>
    </BrowserRouter>
);

