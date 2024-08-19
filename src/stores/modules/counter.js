import { defineStore } from 'pinia'
import { ref } from 'vue'

// 数字计数器模块
export const useCounterStore = defineStore('big-user', () => {
  const count = ref(100)
  const add = (n) => {
    count.value += n
  }

  return {
    count,
    add
  }
})
