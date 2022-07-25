<script setup>
import { useCharactersStore } from '../stores/characters';
import { onBeforeMount, onMounted, ref, computed } from 'vue';
import {  useRouter } from 'vue-router';

//initial data
const useStore = useCharactersStore()
const characters = computed(() => useStore.characters) 
onMounted(() => {
  useStore.fetchCharacters()
})

//search
let input = ref("")
const filteredList = () =>{
  useStore.searchCharacter(input.value)
}

//details
const router = useRouter()
const goToDetails = (id) =>{
router.push(`/details/${id}`)
}

</script>

<template>
  <main>
    <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
      <input class="w-full rounded-lg p-4 m-4" placeholder="Search Character Name .. " id="search-bar" type="text" v-model="input" v-on:keyup.enter="filteredList">

      <div class="flex flex-row flex-wrap justify-around">
        <template v-for="character in characters" v-bind:key="character.id">
          <div 
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl w-3/12 m-2 dark:border-gray-700 dark:bg-gray-800 ">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              v-bind:src="character.image" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ character?.name }}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ character?.species }} -
                {{ character?.origin.name }} - {{ character?.status }}</p>
                <button
                id="details"
                
                class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" v-on:click="goToDetails(character.id)">
                Details
              </button>
            </div>
            
          </div>

        </template>
      </div>


    </div>
  </main>
</template>
