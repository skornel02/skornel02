import{c as l,s as r,r as i,m as p}from"./_astro_assets.51262b4d.js";import{u as c}from"./PostsSearch.85f56dd7.js";import"./index.dd835de8.js";const o={};function m(t){return t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(a,e)=>r({src:o[e].src,...o[e].attributes}))}const s=m(`<h1 id="welcome-to-my-site">Welcome to my site!</h1>
<p>To get the ball rolling with this site I am making a few placeholder content,
but with time I hope that actual useful content will be here.
Until then I hope you enjoy this void of mine.</p>
<h2 id="goals">Goals</h2>
<ul>
<li>To make this website awesome</li>
<li><del>Use cool tech</del> (Svelte got that covered)</li>
<li>Make content</li>
</ul>
<blockquote>
<p>“A stílus mögött egy ember van, az ember mögött egy élet van.” - Kosztolányi Dezső</p>
</blockquote>
<h2 id="disclaimer">Disclaimer</h2>
<p>This post also functions as a test markdown file for most of the <strong>formatting</strong><sup><a href="#user-content-fn-guarantee" id="user-content-fnref-guarantee" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup>.
Here is the <em>Open Graph</em> image of the site:</p>
<p><img src="/assets/og-banner.jpg" alt="Cover"></p>
<hr>
<p><a href="/">Home page</a></p>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #F97583">let</span><span style="color: #E1E4E8"> message </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">'Hello'</span><span style="color: #E1E4E8">;</span></span>
<span class="line"><span style="color: #F97583">const</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">prnt</span><span style="color: #E1E4E8"> </span><span style="color: #F97583">=</span><span style="color: #E1E4E8"> (</span><span style="color: #FFAB70">toPrint</span><span style="color: #E1E4E8">) </span><span style="color: #F97583">=></span><span style="color: #E1E4E8"> console.</span><span style="color: #B392F0">log</span><span style="color: #E1E4E8">(toPrint);</span></span>
<span class="line"><span style="color: #B392F0">prnt</span><span style="color: #E1E4E8">(message);</span></span></code></pre>
<hr>

















<table><thead><tr><th>Syntax^sub^</th><th>Description</th></tr></thead><tbody><tr><td>Header</td><td>Title</td></tr><tr><td>Paragraph</td><td>Text</td></tr></tbody></table>
<p>X^2^</p>
<p>H<del>2</del>O :dog:</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-guarantee">
<p>No guarantees. <a href="#user-content-fnref-guarantee" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>`),d={title:"Welcome",description:"Welcome to my personal site!",date:"2022-03-30T17:40:00.000Z",tags:["meta"],language:"en"},h="/home/runner/work/skornel02/skornel02/website/src/content/blog/welcome.md",u=void 0;function E(){return`
# Welcome to my site!

To get the ball rolling with this site I am making a few placeholder content,
but with time I hope that actual useful content will be here.
Until then I hope you enjoy this void of mine.

## Goals

- To make this website awesome
- ~~Use cool tech~~ (Svelte got that covered)
- Make content

> "A stílus mögött egy ember van, az ember mögött egy élet van." - Kosztolányi Dezső

## Disclaimer

This post also functions as a test markdown file for most of the **formatting**[^guarantee].
Here is the _Open Graph_ image of the site:

![Cover](/assets/og-banner.jpg)

---

[Home page](/)

\`\`\`js
let message = 'Hello';
const prnt = (toPrint) => console.log(toPrint);
prnt(message);
\`\`\`

---

| Syntax^sub^ | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

X^2^

H~2~O :dog:

[^guarantee]: No guarantees.
`}function w(){return s}function k(){return[{depth:1,slug:"welcome-to-my-site",text:"Welcome to my site!"},{depth:2,slug:"goals",text:"Goals"},{depth:2,slug:"disclaimer",text:"Disclaimer"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const F=l((t,a,e)=>{const{layout:g,...n}=d;return n.file=h,n.url=u,i`${p()}${c(s)}`});export{F as Content,w as compiledContent,F as default,h as file,d as frontmatter,k as getHeadings,o as images,E as rawContent,u as url};
