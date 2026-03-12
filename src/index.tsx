import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import './index_desktop.css';
import './index_mobile.css';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
	ReactDOM.hydrateRoot(
		rootElement,
		<React.StrictMode>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</React.StrictMode>
	);
} else {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</React.StrictMode>
	);
}