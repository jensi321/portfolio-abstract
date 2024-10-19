import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';
import { Provider } from 'react-redux';
import store from './Component/Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <AnimatedCursor
        outerSize={40}
        color='235, 235, 235'
        outerAlpha={0.2}
        outerScale={5}
      />
      <App />

    </Provider>
  </>
);
