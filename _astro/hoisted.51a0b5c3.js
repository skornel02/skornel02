import"./hoisted.a7be5322.js";const e=document.querySelector("#github-stats-image"),t=window.matchMedia("(prefers-color-scheme: dark)"),a=(c=void 0)=>{const r=c?.matches??t.matches;e&&(e.src=e.src.replace(/&theme=[a-z]{4,5}/,"")+`&theme=${r?"dark":"light"}`)};a();t.addEventListener("change",a);
