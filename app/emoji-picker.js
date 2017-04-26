(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(d){return d},b.d=function(d,e,f){b.o(d,e)||Object.defineProperty(d,e,{configurable:!1,enumerable:!0,get:f})},b.n=function(d){var e=d&&d.__esModule?function(){return d['default']}:function(){return d};return b.d(e,'a',e),e},b.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)},b.p='',b(b.s=5)})([function(a,b,c){'use strict';c.d(b,'c',function(){return d}),c.d(b,'a',function(){return e}),c.d(b,'b',function(){return f});const d='chrome-ext-emoji-picker-button',e='.'+d,f='chrome-ext-emoji-picker-template'},function(a,b,c){'use strict';c.d(b,'b',function(){return d}),c.d(b,'d',function(){return e}),c.d(b,'e',function(){return f}),c.d(b,'a',function(){return g}),c.d(b,'c',function(){return h});const d='#overlay-wrapper:not(.ui-dialog-content) #sharer',e='#sharer',f='#composer',g='#overlay-actions',h='ui-dialog'},function(a,b){'use strict';function d(f,g){return function(...h){g(),f.apply(this,h)}}b.a=(f,g,h,i={})=>{const{useCapture:j=!1}=i,k=()=>{g.removeEventListener(f,l,j)},l=i.once?d(h,k):h;return g.addEventListener(f,l,j),k}},function(a,b){'use strict';b.a=async(e,f)=>{const g=await fetch(e),h=document.createElement('template');h.id=f,h.innerHTML=await g.text(),document.body.appendChild(h)}},function(a,b,c){'use strict';var d=c(8),e=c(0);const f=(h)=>h.cloneNode(!0);b.a=()=>{const h=document.createElement('button');return h.className=e.c,h.textContent='\uD83D\uDE03',h.addEventListener('click',(i)=>{const j=document.getElementById(e.b),k=f(j.content).firstElementChild;c.i(d.a)(k,i.target),i.stopPropagation()}),h}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1),e=c(4),f=c(3),g=c(0);const h=(m)=>null!=m.querySelector(g.a),i=(m)=>{if(null!=m&&!h(m)){const n=c.i(e.a)();m.prepend(n)}},j=new MutationObserver((m)=>{const n=m[0].target,o=n.querySelector(d.a);i(o)});j.observe(document.querySelector(d.b)||document.body,{childList:!0});const k=new MutationObserver(()=>{const m=document.getElementsByClassName(d.c)[0];if(null!=m){const n=m.querySelector(d.a);i(n)}});k.observe(document.body,{childList:!0});const l=chrome.runtime.getURL('templates/picker.html');c.i(f.a)(l,g.b)},function(a,b,c){'use strict';var d=c(7),e=c(16);c.d(b,'a',function(){return f}),c.d(b,'b',function(){return h}),c.d(b,'c',function(){return i});const f=(j)=>{const k=c.i(d.a)(),l=0<k.length;j.querySelector('.js-clear-latest-btn').classList.toggle('is-hidden',!l),j.querySelector('.js-latest-target').innerHTML=l?k.map(({emoji:m,name:n})=>`<a class='emoji js-clickable-emoji' href='#${c.i(e.a)(n)}-emoji' title='${n}'>${m}</a>`).join(''):'<span class="no-emojis">Nothing yet.</span>'},g=(j)=>setTimeout(f,0,j),h=(j)=>{c.i(d.b)(),g(j.currentTarget)},i=(j,k)=>{c.i(d.c)(j),g(k)}},function(a,b,c){'use strict';c.d(b,'a',function(){return e}),c.d(b,'c',function(){return f}),c.d(b,'b',function(){return g});const e=()=>{const h=localStorage.getItem('BEP_latest-emoji');return null==h?[]:JSON.parse(h)},f=(h)=>{const i=localStorage.getItem('BEP_latest-emoji'),j=null==i?[]:JSON.parse(i),k=j.findIndex((m)=>m.name==h.name);0<=k&&j.splice(k,1),j.unshift(h);const l=j.slice(0,12);localStorage.setItem('BEP_latest-emoji',JSON.stringify(l))},g=()=>localStorage.removeItem('BEP_latest-emoji')},function(a,b,c){'use strict';var d=c(17),e=c(2),f=c(1),g=c(6),h=c(9),i=c(10),j=c(11);const k=e.a.bind(null,'click'),l=()=>{return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?'is-apple':'is-window'};b.a=(n,o)=>{c.i(g.a)(n),k(n,c.i(d.a)(g.b,'.js-clear-latest-btn')),c.i(e.a)('keyup',n,c.i(d.a)(h.a,'input[name="emoji-filter"]')),k(n,c.i(d.a)(h.b,'.js-clear-input-btn')),c.i(i.a)(n),k(n,c.i(d.a)(i.b,'.js-selectable-category'));k(n,c.i(d.a)((u)=>{const v=u.currentTarget.closest(f.d),w=v.querySelector(f.e),y=u.target.textContent.trim();c.i(j.a)(w,y),c.i(g.c)({emoji:y,name:u.target.title},u.currentTarget),t(),u.preventDefault(),u.stopPropagation()},'.js-clickable-emoji'));const r=k(document.body,(u)=>{return s(u.target)?u.stopPropagation():void t()}),s=(u)=>{return null!=u&&(u.matches('.chrome-ext-emoji-picker')||u!=document.body&&s(u.parentElement))},t=()=>{n.remove(),r()};n.classList.add(l()),o.before(n),setTimeout(()=>n.focus(),50)}},function(a,b,c){'use strict';c.d(b,'a',function(){return f}),c.d(b,'b',function(){return h});const d=(i,j)=>{const k=new RegExp(j,'gi');[...i.querySelectorAll('.js-filterable-emoji')].forEach((l)=>l.classList.toggle('is-hidden',!k.test(l.title)))},e=(i,j)=>{const k=j.querySelector('.js-clear-input-btn');k.classList.toggle('is-hidden',!i),k.setAttribute('aria-hidden',i)},f=(i)=>{const j=i.currentTarget,k=i.target.value;d(j,k),e(0<k.length,j)},g=e.bind(null,!1),h=(i)=>{const j=i.currentTarget,k=j.querySelector('input[name="emoji-filter"]');k.value='',g(j),[...j.querySelectorAll('.js-filterable-emoji')].forEach((l)=>l.classList.remove('is-hidden'))}},function(a,b,c){'use strict';function d(k){const l=k.target.scrollTop,m=[...k.target.querySelectorAll('.js-scrollable-section')],n=m.reduce((p,q)=>l+25>q.offsetTop?q:p,m[0]),o=n.dataset.jsSection;h(k.target.closest('.js-root'),o)}var e=c(2);c.d(b,'a',function(){return g}),c.d(b,'b',function(){return j});let f;const g=(k)=>{const l=k.querySelector('.js-scrollable');f=c.i(e.a)('scroll',l,d)},h=(k,l)=>{const m=k.querySelector('.js-selectable-category.is-selected'),n=k.querySelector(`[data-js-section-key="${l}"]`);m!=n&&i([m,n],'is-selected'),k.focus()},i=(k,l,m)=>(Array.isArray(k)?k:[k]).forEach((n)=>n.classList.toggle(l,m)),j=(k)=>{const l=new URL(k.target.href),m=l.hash.substr(1),n=k.currentTarget.querySelector('#'+m);n&&(f(),n.scrollIntoView(),setTimeout(g,100,k.currentTarget)),h(k.target.closest('.js-root'),k.target.dataset.jsSectionKey),k.preventDefault()}},function(a,b){'use strict';b.a=(g,h)=>{g.value=e(g.value,g.selectionStart,h),g.dispatchEvent(new Event('keyup',{bubbles:!0,cancelable:!0})),f(g)};const e=(g,h,i)=>g.substring(0,h)+i+g.substring(h),f=(g)=>setTimeout(()=>g.focus(),100)},function(a,b){'use strict';b.a=(e)=>e.replace(/\s+/g,'-')},function(a,b){'use strict';b.a=(...e)=>(f)=>{for(let g=e.slice();0<g.length;)f=g.pop()(f);return f}},function(a,b){'use strict';b.a=(e)=>e.toLowerCase()},function(a,b){'use strict';b.a=(e)=>e.replace(/[&]/g,'')},function(a,b,c){'use strict';var d=c(13),e=c(14),f=c(12),g=c(15);const h=c.i(d.a)(e.a,f.a,g.a);b.a=h},function(a,b){'use strict';b.a=(f,g)=>{return function(i){const j=e(i.target,g,this);null!=j&&f.call(j,i)}};const e=(f,g,h)=>{return f===h?null:f.matches(g)?f:f.parentNode?e(f.parentNode,g,h):null}}]);