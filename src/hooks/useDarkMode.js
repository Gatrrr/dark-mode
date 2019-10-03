import { useLocalStorage } from "./useLocalStorage";
import React, { useState, useEffect } from 'react';

export const useDarkMode = (initialValue) => {

   const [value, setValue] = useLocalStorage("darkMode", initialValue)
   useEffect(() => {

       if (value==true) {

           document.querySelector('body').classList.add('dark-mode')
       } else {

           document.querySelector('body').classList.remove('dark-mode')
       }

   }, [value]);
   
   return [value, setValue];
}