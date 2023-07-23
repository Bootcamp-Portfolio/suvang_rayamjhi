//Skills, Experience and Education tab carousel items
function showTab(tabName) {
     const tabs = document.getElementsByClassName("tab-content");
     for (const tab of tabs) {
         if (tab.id === tabName) {
             tab.classList.add("active-tab");
         } else {
             tab.classList.remove("active-tab");
         }
     }

     const links = document.getElementsByClassName("tab-link");
     for (const link of links) {
         if (link.textContent.toLowerCase() === tabName) {
             link.classList.add("active-link");
         } else {
             link.classList.remove("active-link");
         }
     }
 }
