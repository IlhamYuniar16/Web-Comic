<template>
  <header class="shadow-md bg-white">
    <main class="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <h1 class="font-bold text-3xl text-black">LynxxComic</h1>

      <div class="flex gap-6 items-center">
        <div
          class="flex items-center border px-3 py-1 rounded-full bg-gray-100"
        >
          <input
            type="text"
            placeholder="Cari..."
            v-model="search"
            class="outline-none bg-transparent text-black"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 
              0 1 0 5.196 5.196a7.5 7.5 
              0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <!-- <button
          class="flex bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          @click="darkMode"
        >
          <svg
            v-if="openDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-amber-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 
              1.591M21 12h-2.25m-.386 
              6.364-1.591-1.591M12 
              18.75V21m-4.773-4.227-1.591 
              1.591M5.25 12H3m4.227-4.773L5.636 
              5.636M15.75 12a3.75 3.75 0 1 
              1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 
              18 15.75c-5.385 0-9.75-4.365-9.75-9.75
              0-1.33.266-2.597.748-3.752A9.753
              9.753 0 0 0 3 11.25C3 16.635 7.365
              21 12.75 21a9.753 9.753 0 0 0
              9.002-5.998Z"
            />
          </svg>
        </button> -->
      </div>
    </main>

    <main
      class="flex gap-5 items-center justify-center py-3 bg-gray-50 text-sm font-medium text-gray-700"
    >
      <a
        href="/"
        class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
        >Beranda</a
      >
      <a
        href="/mangapopuler"
        class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center"
      >
        <img class="w-7" src="../assets/img/jepang.webp" alt="" /> Manga Populer
      </a>
      <a href="/manhwapopuler"
        class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center"
      >
        <img class="w-7" src="../assets/img/korea.webp" alt="" /> Manhwa Populer
      </a>
    </main>
  </header>

  <section class="bg-gray-200 ">
      <div v-if="loading" class="text-center flex justify-center py-10 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
        </div>
      <section v-else-if="errorMsg" class="text-center py-10 text-red-500">
        {{ errorMsg }}
      </section>
    
      <section v-else class="container m-auto p-5 max-w-4xl">
        <div class="bg-white shadow-md rounded-lg mb-10 p-5">
          <div class="flex flex-col sm:flex-row gap-5 mb-5">
            <img
              :src="comic.thumb"
              alt="cover"
              class="w-40 h-56 object-cover rounded-md shadow-md"
            />
            <div>
              <h1 class="text-2xl font-bold mb-2">{{ comic.title }}</h1>
              <p class="text-gray-600 mb-1">
                Tipe: <span class="font-medium text-black">{{ comic.type }}</span>
              </p>
              <p class="text-gray-600 mb-1">
                Status:
                <span class="font-medium text-black">{{ comic.status }}</span>
              </p>
              <p class="text-gray-600 mb-1">
                Author:
                <span class="font-medium text-black">{{ comic.author }}</span>
              </p>
              <p class="text-gray-600 mb-1">
                Artist:
                <span class="font-medium text-black">{{ comic.artist }}</span>
              </p>
              <p class="text-gray-600 mb-1">
                Released:
                <span class="font-medium text-black">{{ comic.released }}</span>
              </p>
              <p class="text-gray-600 mb-1">
                Rating:
                <span class="font-medium text-black">⭐{{ comic.rating }}</span>
              </p>
            </div>
          </div>
    
          <div class="bg-gray-100 rounded-lg p-4 mb-5">
            <h2 class="font-semibold text-lg mb-2">Sinopsis</h2>
            <p
              class="text-gray-700 leading-relaxed whitespace-pre-line text-justify"
            >
              {{ comic.description }}
            </p>
          </div>
          <div>
            <h2 class="font-semibold text-lg mb-3">Daftar Chapter</h2>
            <div
              v-if="comic.chapters && Array.isArray(comic.chapters)"
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
              <div v-for="(ch, i) in comic.chapters" :key="i" @click="openChapter(ch.slug)" class="cursor-pointer flex pl-3 gap-2 bg-gray-200 hover:bg-gray-300 transition rounded-md py-2 font-medium">
                  <img :src="comic.thumb" class="w-10" alt="">
                <div>
                    <h1>{{ ch.chapter || ch.title }}</h1>
                    <span class="text-xs ">{{ ch.date }}</span>
                </div>
            </div>
            </div>
            <div v-else class="text-gray-500">Chapter belum tersedia.</div>
          </div>
        </div>
      </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const comic = ref({});
const loading = ref(true);
const errorMsg = ref("");

async function getComicDetail() {
  try {
    const res = await axios.get(
      `https://www.sankavollerei.com/comic/kiryuu/manga/${slug}`
    );
    const data = res.data;
    comic.value = {
      title: data.title,
      author: data.author,
      artist: data.artist,
      status: data.status,
      type: data.type,
      description: data.synopsis,
      thumb: data.imageSrc,
      chapters: data.chapters,
      rating: data.rating,
      released: data.released,
    };
  } catch (err) {
    console.error(err);
    errorMsg.value = "Gagal memuat detail komik.";
  } finally {
    loading.value = false;
  }
}
const openDarkMode = ref(false);
function darkMode() {
  openDarkMode.value = !openDarkMode.value;
  const saved = document.documentElement.classList.contains("dark");
  if (saved) {
    localStorage.theme === "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme === "dark";
    document.documentElement.classList.add("dark");
  }
}

onMounted(() => {
  if (localStorage.theme === "light") {
    openDarkMode.value = false;
    document.documentElement.classList.remove("dark");
  } else {
    openDarkMode.value = true;
    document.documentElement.classList.add("dark");
  }
});

function openChapter(slug) {
  if (!slug) return;
  const cleanLink = slug.replace(/^\/chapter\//, "").replace(/^\/+/, "");
  router.push(`/comic/kiryuu/chapter/${cleanLink}`);
}

onMounted(() => {
  getComicDetail();
});
</script>

<style scoped>
section {
  transition: all 0.3s ease;
}
</style>
