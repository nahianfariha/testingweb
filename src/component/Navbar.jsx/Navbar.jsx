//"use client";

//import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo} from "flowbite-react";
//import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi"
import 'flowbite';
function Navbar() {
  return (
<div>

{/* for responsive button on mobile*/}

<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-black-50 dark:hover:bg-white-50 dark:focus:ring-white-50">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

{/* The Logo*/}

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
<div className="absolute right-0 top-[61%] transform -translate-y-[30%] h-1/3 w-px bg-gray-200"></div>
   <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-white">
      <a className="flex flex-col items-center justify-center py-4 mt-4 mb-4">
         <img src="/src/assets/Logo.png" className="h-40 w-40 mb-2"/>
         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> </span>
      </a>

{/* list after the logo*/}
        {/* Text 1*/}
        <ul className="space-y-0 font-lato font-bold text-m tracking-widest">
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">PAINTINGS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">ILLUSTRATIONS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">CARTOON BANNERS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">PAINTED TOTE BAGS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">T-SHIRTS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">2D ANIMATIONS</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">UI DESIGN</span>
            </a>
            </li>
         {/* Text 1*/}
            <li>
            <a href="#" className="flex justify-center items-center p-2  text-black rounded-lg dark:text-black hover:bg-yellow-50 dark:hover:bg-yellow-50 group">
               <span className="text-center">APPRECIATIONS</span>
            </a>
            </li>
         </ul>
   </div>
</aside>
{/*Gallery Section*/}
<div className="p-4 sm:ml-[25%] mt-8">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>
</div>
{/*About Section*/}
<div className="p-4 sm:ml-[25%] mt-20">
<a className="flex flex-col items-end justify-end py-4 mt-4 mb-4 mr-10">
         <img src="/src/assets/Logo.png" className="h-40 w-40 mb-2"/>
         <a className="flex flex-col items-end justify-end py-4 mt-4 mb-4 mr-10"></a>
          <h2 className="flex flex-col items-end justify-end py-4 mt-4 mb-4 mr-10">Text........</h2>
        </a>
    <span class="sr-only">Loading...</span>
</div>



</div>

  );
}

//<img src="src/assets/ill.PNG" alt="..." />

export default Navbar