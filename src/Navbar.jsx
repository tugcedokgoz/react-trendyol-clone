import { GrFavorite } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
function Navbar() {
    return (
        <nav class="bg-white border-white dark:bg-white ">
            <div class=" flex items-center py-4 justify-between mx-2">
                <a href="#" class="flex items-center">
                    <span class="self-center font-source-sans-pro text-4xl font-semibold whitespace-nowrap dark:text-[#231F20]">trendyol</span>
                </a>
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-black dark:text-black  dark:hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-500 rounded-lg text-sm p-2.5 mr-1" >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
                <div class="relative hidden md:block w-1/2  ">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsSearch />
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-black border 
                    border-[#F3F3F3] rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-orange-400  " placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white">
                        <li className='flex'>
                            <BsPerson className="w-4 h-4 mt-1  m-1 " style={{ color: "black" }} />
                            <a href="#" class="block py-2 pl-3 pr-4  md:dark:text-[#333333]  md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500" aria-current="page">Hesabım</a>
                        </li>
                        <li className="flex m-2 ">
                            <GrFavorite className="w-4 h-4 -mt-1 m-1 " style={{ color: "black" }} />
                            <a href="#" class="block py-2 pl-3 pr-4 -mt-2  md:dark:text-[#333333] md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500">Favorilerim</a>

                        </li>
                        <li className="flex m-2">
                           <AiOutlineShoppingCart className="w-4 h-4 m-1 -mt-1 " style= {{color: 'black'}}/>
                            <a href="#" class="block py-2 pl-3 pr-4 -mt-2 md:dark:text-[#333333] md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500">Sepetim</a>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>

    );
}

export default Navbar;
