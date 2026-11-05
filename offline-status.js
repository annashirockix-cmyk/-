"use strict";
(function(){
async function check(){
 var badge=document.getElementById("offlineStatus");if(!badge)return;
 function set(text,ok,title){badge.textContent=text;badge.style.borderColor=ok?"var(--ok)":"var(--err)";badge.title=title||text;}
 if(!("serviceWorker"in navigator)||location.protocol==="file:"){set("⚠️ Офлайн недоступен",false,"Для офлайн-кэша откройте портал через HTTPS (GitHub Pages)");return;}
 try{
  await navigator.serviceWorker.register("./service-worker.js");
  await navigator.serviceWorker.ready;
  var cache=await caches.open("english-portal-cache-v1");
  var files=["./index.html","./style.css","./app.js","./data-basic.js","./data-technical.js","./reports.js"];
  var found=await Promise.all(files.map(function(path){return cache.match(path,{ignoreSearch:true});}));
  var ready=found.every(Boolean);
  if(!navigator.onLine)set(ready?"📴 Офлайн готов":"📴 Нет сети · кэш неполный",ready,ready?"Основные учебные файлы сохранены на устройстве":"Не все необходимые файлы были загружены до отключения сети");
  else set(ready?"✓ Офлайн готов":"⚠️ Кэш загружается",ready,ready?"Основные учебные материалы сохранены для работы без интернета":"Оставьте портал открытым онлайн и обновите страницу, чтобы заполнить кэш");
 }catch(err){set("⚠️ Ошибка офлайн-кэша",false,err.message||"Не удалось проверить кэш");console.warn("Offline readiness:",err);}
}
window.addEventListener("load",check);
window.addEventListener("online",check);
window.addEventListener("offline",check);
})();