import { ref } from 'vue';
import { defineStore } from "pinia";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import router from "@/router";

export const useUserStore = defineStore('user', () => {
  const auth = getAuth();

  const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        router.replace({ path: '/kinopoisk-widget/' })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return {registerUser}
})