import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const countComputed = computed(()=>{
        return count.value + 5
    })

    function countMethod() {
        count.value++
    }

    return { count, countComputed, countMethod }
})