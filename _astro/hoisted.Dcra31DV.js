import"./hoisted.BB6uRyKX.js";const o=document.querySelector("#github-stats-image"),r=window.matchMedia("(prefers-color-scheme: dark)"),i=(t=void 0)=>{const e=t?.matches??r.matches;o&&(o.src=o.src.replace(/&theme=[a-z]{4,5}/,"")+`&theme=${e?"dark":"light"}`)};i();r.addEventListener("change",i);function c(t){const e=document.getElementById(`skill-template-${t}`);if(!e||!(e instanceof HTMLTemplateElement)){console.error(`Could not find template for skill ${t}`);return}const n=document.getElementById("skill-container");if(!n){console.error("Could not find skill container");return}const l=document.getElementById("skill-data");if(!l){console.error("Could not find skill container");return}const s=e.content.cloneNode(!0);l.innerHTML="",l.appendChild(s),n.classList.remove("hidden"),n.classList.add("markdown-body")}document.querySelectorAll("[data-skill-slug]").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-skill-slug");if(!e){console.error("Could not find skill slug");return}c(e)})});