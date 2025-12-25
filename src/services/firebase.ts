import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc8UHR0lOTJRh2UqewpaxYSpFTJf4JsZg",
  authDomain: "ai-learning-platform-d25bd.firebaseapp.com",
  projectId: "ai-learning-platform-d25bd",
  storageBucket: "ai-learning-platform-d25bd.firebasestorage.app",
  messagingSenderId: "723952180406",
  appId: "1:723952180406:web:76b79f8bef867fcb699a17",
  measurementId: "G-6HD5RWD32G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
