const K='sl1',A=['./','index.html','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(K).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(fetch(e.request).then(r=>{if(new URL(e.request.url).origin==location.origin){const c=r.clone();caches.open(K).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request)))});
