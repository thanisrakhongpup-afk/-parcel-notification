importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCMbbWj1prq7W8WJLh-L9yFA8vEEntIVfw",
  authDomain: "parcel-tracking-app-e6713.firebaseapp.com",
  projectId: "parcel-tracking-app-e6713",
  storageBucket: "parcel-tracking-app-e6713.appspot.com",
  messagingSenderId: "232196341961",
  appId: "1:232196341961:web:f35b60035e0199275b8d18"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "📦 แจ้งเตือนพัสดุ";
  const options = {
    body: payload.notification?.body || "พัสดุของคุณใกล้ถึงแล้ว",
    icon: "/icon/customer-icon-192.png"
  };

  self.registration.showNotification(title, options);
});
