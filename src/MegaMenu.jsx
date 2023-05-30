import { Menu } from "@headlessui/react";

export default function MegaMenu() {
  return (
    <div class="group">
    <button class="px-5 py-4 group-hover:text-orange-400 hover:underline">Avrat
        {/* &darr; down arrow  aşaaa ok kürtçe yaz mk kürdü*/}
    </button>
    <div
        class="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white text-black duration-300">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">Giyim</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Elbise</a>
                <a href="#" class="hover:underline hover:text-orange-400">T-shirt</a>
                <a href="#" class="hover:underline hover:text-orange-400">Pantolon</a>

            </div>

            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">Ayakkabı</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Sneakers</a>
                <a href="#" class="hover:underline hover:text-orange-400">Topuklu</a>
                <a href="#" class="hover:underline hover:text-orange-400">Bot</a>
            </div>

            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">İç Giyim</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Pijama</a>
                <a href="#" class="hover:underline hover:text-orange-400">Kilot</a>
                <a href="#" class="hover:underline hover:text-orange-400">Sütyen</a>

            </div>

        </div>
    </div>
    <button class="px-5 py-4 group-hover:text-orange-400 hover:underline">Erkek
        {/* &darr; down arrow */}
    </button>
    <div
        class="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white text-black duration-300">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">Saat</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Elbise</a>
                <a href="#" class="hover:underline hover:text-orange-400">T-shirt</a>
                <a href="#" class="hover:underline hover:text-orange-400">Pantolon</a>

            </div>

            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">Kişisel Bakım</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Sneakers</a>
                <a href="#" class="hover:underline hover:text-orange-400">Topuklu</a>
                <a href="#" class="hover:underline hover:text-orange-400">Bot</a>
            </div>

            <div class="flex flex-col">
                <h3 class="mb-4 text-xl">İç Giyim</h3>
                <a href="#" class="hover:underline hover:text-orange-400">Pijama</a>
                <a href="#" class="hover:underline hover:text-orange-400">Kilot</a>
                <a href="#" class="hover:underline hover:text-orange-400">Sütyen</a>

            </div>

        </div>
    </div>
</div> 
  );
}
