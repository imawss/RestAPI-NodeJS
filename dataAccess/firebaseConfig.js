import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import {  getFirestore } from 'firebase-admin/firestore';
import { serviceAccount } from '../dataAccess/serviceAccount.json' assert {type: 'json'};

const firebaseApp = initializeApp({ credential: admin.credential.cert(serviceAccount) });

const auth = getAuth(firebaseApp);
export const firebaseContext = getFirestore(firebaseApp);
export const Users = firebaseContext.collection("Users");
