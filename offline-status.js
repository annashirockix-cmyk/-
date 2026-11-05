"use strict";
(function(){
function status(t,ok,tip){var e=document.getElementById("offlineStatus");if(!e)return;e.textContent=t;e.style.borderColor=ok?"var(--ok)":"var(--err)";e.title=tip||t;}
async function check(){
 var e=document.getElementById("offlineStatus");if(!e)return;
 if(!("serviceWorker"in navigator)||location.protocol==="file:"){status("⚠️ Офлайн недоступен",false,"Откройте портал через HTTPS (GitHub Pages)");return;}
 try{
  var reg=await navigator.serviceWorker.getRegistration();
  if(!reg&&navigator.onLine)reg=await navigator.serviceWorker.register("./service-worker.js");
  if(!reg)throw Error("Service Worker ещё не установлен");
  await navigator.serviceWorker.ready;
  var cache=await caches.open("english-portal-cache-v3");
  var files=["./index.html","./style.css","./app.js","./data-basic.js","./data-technical.js","./reports.js"];
  var found=await Promise.all(files.map(function(path){return cache.match(path,{ignoreSearch:true});}));
  var ready=found.every(Boolean);
  if(!navigator.onLine)status(ready?"📴 Офлайн · готово":"📴 Офлайн · кэш неполный",ready,ready?"Основные файлы доступны без интернета":"Часть обязательных файлов не была сохранена; подключитесь к сети и обновите портал");
  else status(ready?"✓ Офлайн готов":"⚠️ Кэш неполный",ready,ready?"Основные учебные файлы сохранены для работы без интернета":"Откройте портал онлайн и обновите страницу для загрузки файлов");
 }catch(err){status(navigator.onLine?"⚠️ Ошибка офлайн-кэша":"📴 Офлайн не подготовлен",false,err.message);}
}
window.addEventListener("load",check);
window.addEventListener("online",check);
window.addEventListener("offline",check);
})();