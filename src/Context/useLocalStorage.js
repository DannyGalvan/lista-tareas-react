import {useState, useEffect} from "react";

export default function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(()=>{
      setTimeout(()=>{
        try {
  
          const localStorageItem = localStorage.getItem(itemName);
  
          let parseItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parseItem = initialValue;
          }else{
            parseItem = JSON.parse(localStorageItem);
          }
  
          setItem(parseItem);
          setLoading(false);
  
          console.log(loading);
          
        } catch (error) {
          setError(error);
        }
      },3000)
    },[])
  
    const save = (newItem)=>{
     try {
  
      const string = JSON.stringify(newItem);
      localStorage.setItem(itemName, string);
  
      setItem(newItem);
      
     } catch (error) {
        setError(error);
     }
    }
  
    return {
            item, 
            save,
            loading,
            error,
          };
  }