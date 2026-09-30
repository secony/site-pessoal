(() => {
  const S = window.SITE, $ = (s) => document.querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; };

  document.querySelectorAll("[data-brand]").forEach(n => n.textContent = S.brand);
  $("#year").textContent = new Date().getFullYear();
  $("#stack").textContent = S.stack.join("  /  ");

  // Contato: WhatsApp > e-mail > âncora
  const c = S.contact, msg = encodeURIComponent(c.message);
  const link = c.whatsapp ? `https://wa.me/${c.whatsapp}?text=${msg}` : c.email ? `mailto:${c.email}?subject=Novo%20projeto&body=${msg}` : "#contato";
  $("#final-cta").href = link;
  const ct = $("#contacts");
  if (c.whatsapp) ct.append(el("a", "", "WhatsApp"));
  if (c.email) ct.append(el("a", "", c.email));
  if (c.whatsapp) ct.firstChild.href = link;
  if (c.email) ct.lastChild.href = "mailto:" + c.email;
  S.social.forEach(s => { const a = el("a", "", s.label); a.href = s.url; a.rel = "noopener"; ct.append(a); });

  // Projetos
  const works = $("#works");
  S.projects.forEach((p, i) => {
    const f = el("article", "work");
    f.innerHTML = `<a class="shot ${p.layout}" href="${p.url}" aria-label="Visualizar ${p.name}" style="--bg:${p.colors.bg};--fg:${p.colors.fg};--ac:${p.colors.ac}">
      <div class="m-bar"><i></i><i></i><i></i></div>
      <div class="m-body"><b class="m-nav"></b><b class="m-t"></b><b class="m-t s"></b><b class="m-l"></b><b class="m-btn"></b><b class="m-img"></b></div></a>
      <div class="meta"><div><h3>${p.name}</h3><p>${p.desc}</p></div><span class="tag">${p.category}</span></div>
      <a class="link" href="${p.url}">Visualizar projeto</a>`;
    works.append(f);
  });

  // Depoimentos
  S.testimonials.forEach(t => $("#quotes").append(el("blockquote", "", `<p>${t.text}</p><footer>${t.name}, ${t.role}</footer>`)));

  // FAQ (details/summary: acessível sem JS extra)
  S.faq.forEach(([q, a]) => $("#faq-list").append(el("details", "", `<summary>${q}</summary><p>${a}</p>`)));

  // Menu mobile
  const btn = $(".menu-btn"), nav = $(".nav");
  btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  $("#menu").addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

  // CTAs apontam para o contato
  document.querySelectorAll("[data-cta]").forEach(a => { if (link !== "#contato") a.href = link; });

  // Entrada discreta das seções
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".sec .wrap").forEach(n => { n.classList.add("rv"); io.observe(n); });
  }
})();
