importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCb6AZFWVtQJrqEQsakf93UayFRr3KB3I8",
  authDomain: "chapri-1ef24.firebaseapp.com",
  databaseURL: "https://chapri-1ef24-default-rtdb.firebaseio.com",
  projectId: "chapri-1ef24",
  storageBucket: "chapri-1ef24.firebasestorage.app",
  messagingSenderId: "33677428985",
  appId: "1:33677428985:web:5f0aa015b2bedf462afa28"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || payload.data?.title || '🎮 STRIKE X ARENA';
  const body  = payload.notification?.body  || payload.data?.body  || '';
  self.registration.showNotification(title, {
    body: body,
    icon: '/favicon.png',
    vibrate: [200, 100, 200],
    tag: 'sxa-' + Date.now()
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(self.location.origin));
});
