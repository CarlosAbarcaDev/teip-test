<script setup>

import { useDetailsStore } from '../stores/details';
import { onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';


//initial data
const router = useRouter()
const params = router.currentRoute.value.params.id
const useStore = useDetailsStore()
const detailsInfo = computed(() => useStore.details) 

onMounted(() => {
    useStore.fetchDetails(params)
})

const goToDetails = () => {
    router.push(`/`)
}


</script>

<template>
    <div class="grid h-screen place-items-center">
        <div
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl w-10/12 m-auto dark:border-gray-700 dark:bg-gray-800 ">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                v-bind:src="detailsInfo.image" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ detailsInfo.name ?
                        detailsInfo.name : ''
                }}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-white font-bold">Especie
                        :</span> {{ detailsInfo.species ? detailsInfo.species : '' }} </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-white font-bold">
                        Origen: </span> {{ detailsInfo?.origin?.name }} </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="text-white font-bold">
                        Estatus: </span> {{ detailsInfo?.status }} </p>
            </div>
            <div class="mx-5">
                <button
                    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                    v-on:click="goToDetails()">
                    Back
                </button>
            </div>
        </div>
    </div>

</template>