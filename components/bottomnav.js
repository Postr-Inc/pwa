import { vhtml } from "vaderjs";

 
export const bottomnav = (user) => {
 return vhtml`
 <div class="flex flex-row 
 p-5
 bottom-[-1px] left-0
   w-full fixed bg-white   h-16  z-[9999] gap-3 justify-between">
    ${window.location.hash === "#/" ? vhtml`
    <img src="./src/public/assets/icons/homeFilled.svg" class=" w-7 h-7" alt="home" />
    `
:

vhtml`
      <img src="./src/public/assets/icons/home.svg" class=" w-7 h-7" alt="home" />
`
    }
    <img src="./src/public/assets/icons/search.svg" class="w-7 h-7" alt="search" />
    <img src="./src/public/assets/icons/edit.svg" class="w-7 h-7" alt="plus" />
    <svg 
    class="w-7 h-7 "
    fill="${window.location.hash === '#/notifications' ? '#F13B38' : 'currentColor'}"
    xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
   
    <img src="./src/public/assets/icons/account.svg" class="w-7 h-7" alt="account" />
 </div>
 `
};