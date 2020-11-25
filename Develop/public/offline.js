const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;
var dataBase;
const request=indexedDB.open("budget",1)
request.onsuccess=()=>{


    
}

function offline(){ 
console.log("checkdatabase")


}

window.addEventListener("online",offline)
