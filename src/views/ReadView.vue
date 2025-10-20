<template>
        <header class="shadow-md hidden md:block bg-white dark:bg-gray-900 dark:text-white transition-all duration-300">
        <main class="flex justify-between items-center p-4 max-w-6xl mx-auto">
            <main class="md:flex gap-5 hidden items-center justify-center py-3  text-sm font-medium text-gray-700">
              <a href="/" class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">Beranda</a>
              <a href="/mangapopuler" class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center">
                <img class="w-7" src="../assets/img/jepang.webp" alt=""> Manga Populer
              </a>
              <a href="/manhwapopuler" class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center">
                <img class="w-7" src="../assets/img/korea.webp" alt=""> Manhwa Populer
              </a>
            </main>

          <div class="md:flex hidden gap-6 items-center justify-end">
     
            <button class="flex bg-gray-200 hover:bg-gray-300 p-2 rounded-full" @click="darkMode">
              <svg v-if="openDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386
                  6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591
                  1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                  3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18
                  15.75c-5.385 0-9.75-4.365-9.75-9.75
                  0-1.33.266-2.597.748-3.752A9.753
                  9.753 0 0 0 3 11.25C3 16.635 7.365 21
                  12.75 21a9.753 9.753 0 0 0
                  9.002-5.998Z" />
              </svg>
            </button>
          </div>
        </main>
      </header>
      <section class="bg-white md:dark:bg-gray-900 md:dark:text-white transition-all duration-300">
          <div class="max-w-5xl mx-auto md:px-4 py-6 font-sans ">
            <div v-if="loading" class="text-center flex justify-center py-10 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
        </div>
        
            <div v-else-if="errorMsg" class="text-center text-red-500 py-10 text-lg">
              {{ errorMsg }}
            </div>
        
            <div v-else> 
              <h1 class="text-3xl font-bold text-center mb-2 md:px-0 px-10 transition-all duration-300" >{{ title }}</h1>
              <p class="text-center text-gray-600 mb-6">
                Kreator: <span class="font-medium text-black md:dark:text-white transition-all duration-300">{{ comic.creator }}</span>
              </p>
        
              <div class="flex flex-col items-center">
                <img
                  v-for="(img, i) in comic.images"
                  :key="i"
                  :src="img"
                  alt="Halaman Komik"
                  loading="lazy"
                  class="w-full md:max-w-3xl shadow-md border-gray-200 hover:shadow-lg transition"
                />
              </div>
        
              <div class="flex justify-between items-center md:px-27 mt-5 px-5">
                <button
                  @click="prevChapter"
                  :disabled="currentChapter <= 1"
                  class="px-5 py-2 bg-gray-500 md:dark:bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:dark:text-black text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
                </button>
                <a href="/" class="bg-gray-500 md:px-0 px-5 md:hidden block py-2 rounded-md md:dark:text-black text-white md:dark:bg-gray-300">Beranda</a>
                <button
                  @click="nextChapter"
                  class="px-5 py-2 md:dark:bg-gray-300 bg-gray-500 rounded-md hover:bg-gray-400 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:dark:text-black text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </button>
              </div>
            </div>
          </div>
      </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from "axios"

const route = useRoute()
const router = useRouter()
const openDarkMode = ref(true)
const title = ref("")
const comic = ref({})
const loading = ref(true)
const errorMsg = ref("")

async function getComicImages() {
  try {
    loading.value = true
    const slug = route.params.slug
    const res = await axios.get(`https://www.sankavollerei.com/comic/kiryuu/chapter/${slug}`)
    comic.value = res.data
    title.value = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  } catch (err) {
    console.error(err)
    errorMsg.value = "Gagal memuat gambar komik."
  } finally {
    loading.value = false
  }
}

function darkMode() {
  openDarkMode.value = !openDarkMode.value
  const saved = document.documentElement.classList.contains('dark')
  if(saved) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
}

onMounted(() => {
  if(localStorage.theme === 'light') {
    openDarkMode.value = false
    document.documentElement.classList.remove('dark')
  } else {
    openDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

function prevChapter() {
  const match = route.params.slug.match(/(.*?)-(\d+)$/)
  if (!match) return
  const [_, base, num] = match
  const prevNum = Math.max(1, parseInt(num) - 1)
  router.push(`/comic/kiryuu/chapter/${base}-${prevNum}`)
}

function nextChapter() {
  const match = route.params.slug.match(/(.*?)-(\d+)$/)
  if (!match) return
  const [_, base, num] = match
  const nextNum = parseInt(num) + 1
  router.push(`/comic/kiryuu/chapter/${base}-${nextNum}`)
}

onMounted(() => {
  getComicImages()
})

watch(() => route.params.slug, () => {
  getComicImages()
})
</script>
