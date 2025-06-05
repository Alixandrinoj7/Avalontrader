import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Configurações do Firebase, puxando das variáveis de ambiente
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
