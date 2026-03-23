(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=t(n);fetch(n.href,c)}})();const A=document.querySelector("#app"),s={dresses:[],ideas:[],lacePatterns:[],filters:{readyToWear:!1,madeToOrder:!1,forSale:!1,forRent:!1},currentView:"list",currentSection:"catalog",selectedItem:null},F=(e,a="PHP")=>{if(typeof e!="number")return"Request pricing";try{return new Intl.NumberFormat("en-PH",{style:"currency",currency:a}).format(e)}catch{return`${e} ${a}`}},k=e=>e.type==="idea"||e.type==="lacePattern"?{type:"none",value:""}:typeof e.price=="number"?{type:"price",value:F(e.price,e.currency)}:{type:"message",value:e.priceMessage||"Message us on Facebook for pricing"},B=e=>{var a;return typeof e.description=="string"?e.description:(a=e.description)!=null&&a.short?e.description.short:"Minimal bridal silhouette."},H=e=>{var a,t;return typeof e.description=="string"?e.description:(a=e.description)!=null&&a.full?e.description.full:(t=e.description)!=null&&t.short?e.description.short:"Minimal bridal silhouette."},h=(e,a="")=>{const t=document.createElement("span");return t.className=`pill ${a}`.trim(),t.textContent=e,t},I=()=>`
    <footer class="footer">
      <a href="https://www.facebook.com/profile.php?id=100076109204201" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" class="social-link">
        <svg class="facebook-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </footer>
  `,N=()=>s.currentSection==="ideas"?`
      <section class="hero">
        <div class="hero__card">
          <div class="hero__badge">Gown Inspo</div>
          <p class="hero__metric">Concepts in progress</p>
          <p class="hero__desc">A creative board of gowns we have designed but not yet produced.</p>
          <p class="hero__desc">Explore silhouettes, fabrics, and styling direction for upcoming Mujeres collections.</p>
        </div>
      </section>
    `:s.currentSection==="lacePatterns"?`
      <section class="hero">
        <div class="hero__card">
          <div class="hero__badge">Lace Patterns</div>
          <p class="hero__metric">Textile swatches</p>
          <p class="hero__desc">Browse the lace motifs currently available for custom gown work.</p>
          <p class="hero__desc">Use this board to compare pattern style, texture direction, and bridal vibe.</p>
        </div>
      </section>
    `:`
    <section class="hero">
      <div class="hero__card">
        <div class="hero__badge">Catalog</div>
        <p class="hero__metric">Tailored with care</p>
        <p class="hero__sub"><strong>Tailored in Vietnam. Flown to the Philippines.</strong></p>
        <p class="hero__desc">Every Mujeres gown is made by independent seamstresses in Vietnam.</p>
        <p class="hero__desc">To ensure an effortless experience, we offer FREE International Air Cargo on all orders from Vietnam to the Philippines.</p>
        <p class="hero__desc">We have removed the distance and the shipping costs to bring honest, timeless bridal wear directly to you.</p>
      </div>
    </section>
  `,R=()=>s.currentSection!=="catalog"?`
      <section class="filters" aria-label="${s.currentSection==="ideas"?"gown inspo summary":"lace patterns summary"}">
        <div class="meta" id="result-meta"></div>
      </section>
    `:`
    <section class="filters" aria-label="catalog filters">
      <div class="filter-group">
        <button class="filter all-gowns active" data-filter="all" aria-pressed="true">All gowns</button>
        <button class="filter" data-filter="readyToWear" aria-pressed="false">Ready to wear</button>
        <button class="filter" data-filter="madeToOrder" aria-pressed="false">Made to order</button>
        <button class="filter" data-filter="forSale" aria-pressed="false">For sale</button>
        <button class="filter" data-filter="forRent" aria-pressed="false">For rent</button>
      </div>
      <div class="meta" id="result-meta"></div>
    </section>
  `,L=()=>{const e=s.currentSection==="catalog",a=s.currentSection==="ideas",t=s.currentSection==="lacePatterns";A.innerHTML=`
    <main class="page">
      <header class="logo-header">
        <img src="logo.png" alt="Mujeres Bridal" class="logo" />
      </header>

      <section class="section-switcher" aria-label="sections">
        <button class="section-tab ${e?"active":""}" data-section="catalog" aria-pressed="${e}">Catalog</button>
        <button class="section-tab ${a?"active":""}" data-section="ideas" aria-pressed="${a}">Gown Inspo</button>
        <button class="section-tab ${t?"active":""}" data-section="lacePatterns" aria-pressed="${t}">Lace Patterns</button>
      </section>

      ${N()}
      ${R()}

      <section id="items-grid" class="catalog" aria-live="polite"></section>
      ${I()}
    </main>
  `},O=e=>{if(s.currentSection!=="catalog")return e;const{filters:a}=s;return Object.values(a).some(r=>r===!0)?e.filter(r=>{const n=a.readyToWear?r.readyToWear:!1,c=a.madeToOrder?r.madeToOrder:!1,u=a.forSale?r.forSale:!1,o=a.forRent?r.forRent:!1;return n||c||u||o}):e},q=()=>s.currentSection==="ideas"?s.ideas:s.currentSection==="lacePatterns"?s.lacePatterns:O(s.dresses),_=()=>{var c,u;const e=q(),a=document.querySelector("#items-grid"),t=document.querySelector("#result-meta");if(!a||!t)return;const n={catalog:"style",ideas:"concept",lacePatterns:"pattern"}[s.currentSection]||"item";if(t.textContent=`${e.length} ${n}${e.length===1?"":"s"} shown`,e.length===0){const o=s.currentSection==="ideas"?"No gown inspo yet. Add a few concept pieces to start this board.":s.currentSection==="lacePatterns"?"No lace patterns yet. Add available swatches to this board.":"No dresses match these filters yet. Try toggling another option.";a.innerHTML=`<p class="empty">${o}</p>`;return}a.innerHTML="";for(const o of e){const p=document.createElement("article");p.className="card";const w=document.createElement("div");w.className="card__cover",o.cover&&(w.style.backgroundImage=`url(${o.cover})`);const l=document.createElement("div");l.className="card__badges",o.type==="idea"?(l.appendChild(h("Concept","soft")),(c=o.tags)!=null&&c.length&&l.appendChild(h(o.tags[0],"outline"))):o.type==="lacePattern"?(l.appendChild(h("Lace Pattern","soft")),(u=o.tags)!=null&&u.length&&l.appendChild(h(o.tags[0],"outline"))):(o.readyToWear&&l.appendChild(h("Ready to wear","soft")),o.madeToOrder&&l.appendChild(h("Made to order","soft")),o.forSale&&l.appendChild(h("For sale","outline")),o.forRent&&l.appendChild(h("For rent","outline")));const f=document.createElement("div");f.className="card__body";const b=document.createElement("h3");b.textContent=o.name;const y=document.createElement("p");y.className="card__desc",y.textContent=B(o);const g=document.createElement("p");g.className="card__price",o.type==="idea"?g.textContent="Design idea in development":o.type==="lacePattern"?g.textContent="Pattern swatch available":g.textContent=k(o).value,f.appendChild(b),f.appendChild(y),f.appendChild(g),p.appendChild(w),p.appendChild(l),p.appendChild(f),p.addEventListener("click",()=>{s.selectedItem=o,s.currentView="detail",j()}),a.appendChild(p)}},M=()=>{s.filters={readyToWear:!1,madeToOrder:!1,forSale:!1,forRent:!1}},T=()=>{document.querySelectorAll(".section-tab").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-section");!t||t===s.currentSection||(s.currentSection=t,s.currentView="list",s.selectedItem=null,M(),L(),T(),P(),_())})})},P=()=>{if(s.currentSection!=="catalog")return;const e=document.querySelectorAll(".filter");e.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-filter");if(t){if(t==="all")M(),e.forEach(r=>{r.getAttribute("data-filter")==="all"?(r.setAttribute("aria-pressed","true"),r.classList.add("active")):(r.setAttribute("aria-pressed","false"),r.classList.remove("active"))});else{const r=document.querySelector(".filter.all-gowns");r&&(r.setAttribute("aria-pressed","false"),r.classList.remove("active")),s.filters[t]=!s.filters[t],a.setAttribute("aria-pressed",String(s.filters[t])),a.classList.toggle("active",s.filters[t])}_()}})})},j=()=>{const e=s.selectedItem;if(!e)return;const a=e.type==="idea",t=e.type==="lacePattern",n={catalog:"← Back to catalog",ideas:"← Back to gown inspo",lacePatterns:"← Back to lace patterns"}[s.currentSection]||"← Back";A.innerHTML=`
    <main class="page">
      <header class="logo-header">
        <img src="logo.png" alt="Mujeres Bridal" class="logo" />
      </header>

      <div class="detail-container">
        <button class="back-btn" id="back-btn">${n}</button>

        <div class="detail-content">
          <div class="detail-gallery">
            <div class="detail-main-image">
              <button class="nav-btn prev" aria-label="Previous image">‹</button>
              <img src="${e.cover}" alt="${e.name}" />
              <button class="nav-btn next" aria-label="Next image">›</button>
            </div>
            ${e.images&&e.images.length>1?`<div class="detail-thumbnails">
                    ${e.images.map(i=>`<img src="${i}" alt="thumbnail" class="detail-thumb" data-image="${i}">`).join("")}
                  </div>`:""}
          </div>

          <div class="detail-info">
            <h1>${e.name}</h1>

            <div class="detail-price" id="detail-price-display"></div>

            <div class="detail-badges" id="detail-badges">
              ${a?'<span class="pill soft">Concept</span>':t?'<span class="pill soft">Lace Pattern</span>':`${e.readyToWear?'<span class="pill soft">Ready to wear</span>':""}
                     ${e.madeToOrder?'<span class="pill soft">Made to order</span>':""}
                     ${e.forSale?'<span class="pill outline">For sale</span>':""}
                     ${e.forRent?'<span class="pill outline">For rent</span>':""}`}
            </div>

            <div class="detail-description" id="full-description"></div>
          </div>
        </div>
      </div>
      ${I()}
    </main>
  `;const c=document.getElementById("back-btn");c&&c.addEventListener("click",()=>{s.currentView="list",s.selectedItem=null,L(),T(),P(),_()});const u=document.getElementById("full-description");u&&(u.innerHTML=H(e));const o=document.getElementById("detail-price-display");if(o){const i=k(e);i.type==="none"?(o.textContent=t?"Pattern swatch available":"Design idea in development",o.className="detail-price-message"):(o.textContent=i.value,o.className=i.type==="price"?"detail-price":"detail-price-message")}const p=Array.isArray(e.images)?e.images.slice():[],l=p.includes(e.cover)?p:[e.cover,...p],f=document.querySelector(".detail-main-image img"),b=document.querySelectorAll(".detail-thumb"),y=document.querySelector(".nav-btn.prev"),g=document.querySelector(".nav-btn.next");if(!f||!l.length)return;let d=l.findIndex(i=>i===e.cover);d<0&&(d=0);const $=i=>{b.forEach(m=>m.classList.toggle("active",m.getAttribute("data-image")===i))},v=i=>{d=(i+l.length)%l.length;const m=l[d];f.src=m,$(m)};$(l[d]),b.forEach(i=>{i.addEventListener("click",()=>{const m=i.getAttribute("data-image"),C=l.indexOf(m);v(C>=0?C:d)})}),y&&y.addEventListener("click",()=>v(d-1)),g&&g.addEventListener("click",()=>v(d+1));const x=i=>{i.key==="ArrowLeft"&&v(d-1),i.key==="ArrowRight"&&v(d+1)};document.addEventListener("keydown",x,{once:!1});let S=null;f.addEventListener("touchstart",i=>{S=i.changedTouches[0].clientX},{passive:!0}),f.addEventListener("touchend",i=>{if(S==null)return;const m=i.changedTouches[0].clientX-S;Math.abs(m)>30&&(m>0?v(d-1):v(d+1)),S=null});const E=document.querySelector(".detail-gallery");E&&setTimeout(()=>{E.scrollIntoView({behavior:"smooth",block:"start"})},0)},D=async()=>{const a=`./catalog-data.json?t=${new Date().getTime()}`;try{const t=await fetch(a);if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json();s.dresses=Array.isArray(r==null?void 0:r.dresses)?r.dresses.map(n=>({...n,type:"catalog"})):[]}catch(t){console.warn("Using fallback sample catalog",t),s.dresses=[{slug:"sample-dress",name:"Celeste Sample",description:"Hand-finished satin column gown with removable overskirt.",price:12800,currency:"PHP",readyToWear:!0,madeToOrder:!0,forSale:!0,forRent:!0,images:["catalog/sample-dress/dress-placeholder.svg"],cover:"catalog/sample-dress/dress-placeholder.svg",type:"catalog"}]}},V=async()=>{const a=`./ideas-data.json?t=${new Date().getTime()}`;try{const t=await fetch(a);if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json();s.ideas=Array.isArray(r==null?void 0:r.ideas)?r.ideas.map(n=>({...n,type:"idea"})):[]}catch(t){console.warn("Using fallback gown inspo",t),s.ideas=[]}},W=async()=>{const a=`./lace-patterns-data.json?t=${new Date().getTime()}`;try{const t=await fetch(a);if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json();s.lacePatterns=Array.isArray(r==null?void 0:r.patterns)?r.patterns.map(n=>({...n,type:"lacePattern"})):[]}catch(t){console.warn("Using fallback lace patterns",t),s.lacePatterns=[]}},K=async()=>{await Promise.all([D(),V(),W()]),L(),T(),P(),_()};K();
