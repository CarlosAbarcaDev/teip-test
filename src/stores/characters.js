import { defineStore } from "pinia";
import axios from "axios";
export const useCharactersStore = defineStore("main", {
  state: () => {
    return {
      characters: [],
    };
  },
  actions: {
    async fetchCharacters() {
      this.characters = []
      const res = await fetch('https://rickandmortyapi.com/api/character/')
      const { results } = await res.json()
      this.characters.push(...results)
    },

    async searchCharacter(param){
      this.characters = [];
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${param}`)
      const { results } = await res.json()  
      this.characters.push(...results)
    }

  },
});
