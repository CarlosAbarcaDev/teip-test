import { defineStore } from "pinia";
import axios from "axios";
export const useDetailsStore = defineStore("details", {
  state: () => {
    return {
      details: [],
      
    };
  },
  actions: {
    async fetchDetails(id) {
        try {
          const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          
            this.details = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      
    },
  },
});
