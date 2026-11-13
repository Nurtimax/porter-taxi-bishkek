// Firebase, used only for Google Analytics. Loaded on its own after the page (see main.tsx).
import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Web config of the Firebase project "Evacuator Bishkek" (console.firebase.google.com).
// These values only identify the project to Google; they are public by design, not secrets.
const firebaseConfig = {
  apiKey: 'AIzaSyCLr-xwK-Mxq8PwYg0K7rIVlu9dEJjUq7Q',
  authDomain: 'evacuator-bishkek.firebaseapp.com',
  projectId: 'evacuator-bishkek',
  storageBucket: 'evacuator-bishkek.firebasestorage.app',
  messagingSenderId: '94538299155',
  appId: '1:94538299155:web:a5c78df185b2755d07cce6',
  measurementId: 'G-RFV2PRQ3QZ',
};

const app = initializeApp(firebaseConfig);

// Analytics records page views by itself, and it receives the phone_click / whatsapp_click
// events from analytics.ts because they are sent through the page's shared `gtag`.
// isSupported() is false where Analytics cannot run (cookies or IndexedDB unavailable).
void isSupported().then((supported) => {
  if (supported) getAnalytics(app);
});
