import{a as d,S as f,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51401862-5106c302b458f745abd86383c",m="https://pixabay.com/api/";async function y(n){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p>Likes<br>${t.likes}</p>
            <p>Views<br>${t.views}</p>
            <p>Comments<br>${t.comments}</p>
            <p>Downloads<br>${t.downloads}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",function(n){n.preventDefault();const o=v.value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),y(o).then(t=>{if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ff4c4c",position:"topRight"});return}g(t.hits)}).catch(()=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
