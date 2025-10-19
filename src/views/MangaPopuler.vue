<template>
  <header class="shadow-md bg-white fixed w-full top-0 left-0 z-50">
    <main class="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <!-- Logo -->
      <h1 class="font-bold text-2xl text-black md:block">LynxxComic</h1>

      <!-- Tombol Hamburger (mobile) -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex items-center text-gray-700"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Search -->
      <div
        class="hidden md:flex gap-6 items-center"
      >
        <div class="flex items-center border px-3 py-1 rounded-full bg-gray-100">
          <input
            type="text"
            placeholder="Cari..."
            v-model="search"
            class="outline-none bg-transparent text-black w-40 md:w-60"
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
              5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </main>

    <!-- Menu Navigasi -->
    <transition name="slide">
      <nav
        v-if="menuOpen"
        class="flex flex-col gap-3 p-5 bg-gray-100 border-t md:hidden"
      >
        <a
          href="/"
          class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
          @click="closeMenu"
          >Beranda</a
        >
        <a
          href="/mangapopuler"
          class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center"
          @click="closeMenu"
        >
          <img class="w-6" src="../assets/img/jepang.webp" alt="" /> Manga Populer
        </a>
        <a
          href="/manhwapopuler"
          class="rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-2 items-center"
          @click="closeMenu"
        >
          <img class="w-6" src="../assets/img/korea.webp" alt="" /> Manhwa Populer
        </a>

        <!-- Search di mobile -->
        <div class="flex items-center border px-3 py-1 rounded-full bg-white">
          <input
            type="text"
            placeholder="Cari..."
            v-model="search"
            class="outline-none bg-transparent text-black w-full"
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 
              5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </nav>
    </transition>

    <!-- Desktop Nav -->
    <main
      class="hidden md:flex gap-5 items-center justify-center py-3 bg-gray-50 text-sm font-medium text-gray-700"
    >
      <a href="/" class="nav-btn">Beranda</a>
      <a href="/mangapopuler" class="nav-btn flex gap-2 items-center">
        <img class="w-7" src="../assets/img/jepang.webp" alt="" /> Manga Populer
      </a>
      <a href="/manhwapopuler" class="nav-btn flex gap-2 items-center">
        <img class="w-7" src="../assets/img/korea.webp" alt="" /> Manhwa Populer
      </a>
    </main>
  </header>

  <section class="bg-gray-200 mt-10 md:mt-25">
      <section class="pt-10 container mx-auto max-w-6xl px-4">
        <main class="bg-white shadow rounded-md overflow-hidden">
          <div class="bg-gray-700 pl-5 py-3">
            <h1 class="text-white font-semibold text-lg">LynxxComic</h1>
          </div>
          <div class="p-5 text-gray-700 leading-relaxed">
            <p>
              LynxxComic situs baca komik, manga, dan manhwa terpopuler dalam Bahasa
              Indonesia. Tanpa iklan mengganggu, kamu cukup scroll untuk membaca
              chapter berikutnya — mudah, cepat, dan gratis.
            </p>
          </div>
        </main>
        <main class="mt-5 bg-white pb-20 shadow rounded-md p-5">
          <h1 class="font-semibold text-xl mb-5 text-gray-800">Manga Populer</h1>
          <div v-if="loading" class="text-center flex justify-center py-10 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
        </div>
          <div v-else-if="errorMsg" class="text-center py-10 text-red-500">
            {{ errorMsg }}
          </div>
    
          <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div
              v-for="(items, index) in searchData"
              :key="index"
              @click="openPage(items.slug)"
              class="cursor-pointer bg-gray-50 hover:bg-gray-100 transition rounded-md shadow-sm p-2"
            >
              <img
                :src="
                  items.imageSrc || 'https://via.placeholder.com/200x300?text=No+Image'
                "
                alt="cover"
                class="w-full h-56 object-cover rounded-md mb-2"
              />
              <span class="block font-semibold text-sm text-gray-800">
                {{
                  items.title?.length > 15
                    ? items.title.substring(0, 15) + "..."
                    : items.title
                }}
              </span>
              <span class="text-xs">Rating: ⭐{{ items.rating }}</span>
              <span class="block text-xs text-gray-500 mt-1">{{
                items.chapter || "Chapter tidak tersedia"
              }}</span>
            </div>
          </div>
        </main>
      </section>
  </section>
    <footer class="fixed w-full bottom-0 py-5 bg-white shadow">
    <main class="flex justify-center">
      <h1>Copyright by LynxxDev</h1>
    </main>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter()
const search = ref("");
const openDarkMode = ref(false);
const loading = ref(true);
const errorMsg = ref("");
const latestData = ref([]);
// const recomData = ref([])
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

async function getData() {
  try {
    const [latestRes] = await Promise.all([
      axios.get("https://www.sankavollerei.com/comic/kiryuu/latest"),
    ]);
    latestData.value = latestRes.data.results || [];
  } catch (err) {
    errorMsg.value = "Gagal mengambil data dari server.";
    console.error(err);
  } finally {
    loading.value = false;
  }
}

function openPage(slug) {
  if (!slug) return
  const cleanLink = slug.replace(/^\/manga\//, '')
  router.push(`/comic/kiryuu/manga/${cleanLink}`)
}

const searchData = computed(() => {
  return latestData.value.filter((i) =>
    i.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(() => {
  getData();
});
</script>
