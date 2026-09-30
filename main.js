(() => {
  const S = window.SITE, $ = (s) => document.querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; };
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-brand]").forEach(n => n.textContent = S.brand);
  $("#year").textContent = new Date().getFullYear();
  $("#stack").textContent = S.stack.join(" / ");

  // Contato: WhatsApp > e-mail > âncora
  const c = S.contact, msg = encodeURIComponent(c.message);
  const link = c.whatsapp ? `https://wa.me/${c.whatsapp}?text=${msg}` : c.email ? `mailto:${c.email}?subject=Novo%20projeto&body=${msg}` : "#contato";
  $("#final-cta").href = link;
  document.querySelectorAll("[data-cta]").forEach(a => { if (link !== "#contato") a.href = link; });
  const ct = $("#contacts");
  if (c.whatsapp) { const a = el("a", "", "WhatsApp"); a.href = link; ct.append(a); }
  if (c.email) { const a = el("a", "", c.email); a.href = "mailto:" + c.email; ct.append(a); }
  S.social.forEach(s => { const a = el("a", "", s.label); a.href = s.url; a.rel = "noopener"; ct.append(a); });

  // Mockup de site (usado no hero e nos projetos)
  const vars = p => `--mbg:${p.colors.bg};--mfg:${p.colors.fg};--mac:${p.colors.ac}`;
  const mock = p => `<div class="mock ${p.layout}" style="${vars(p)}"><div class="m-nav"><b class="m-logo"></b><span class="m-links"><i></i><i></i><i></i></span></div><div class="m-hero"><div class="m-copy"><b class="m-t"></b><b class="m-t s"></b><b class="m-l"></b><b class="m-l s"></b><b class="m-btn"></b></div><div class="m-img"></div></div></div>`;

  // Projetos
  S.projects.forEach(p => {
    const f = el("article", "work");
    f.innerHTML = `<a class="shot" href="${p.url}" aria-label="Visualizar ${p.name}"><div class="bar"><i></i><i></i><i></i></div>${mock(p)}</a>
      <div class="meta"><div><h3>${p.name}</h3><p>${p.desc}</p></div><span class="tag">${p.category}</span></div>
      <a class="link" href="${p.url}">Visualizar projeto</a>`;
    $("#works").append(f);
  });

  // Hero: o mockup troca de projeto, mostrando três sites diferentes
  const stage = $("#stage-mock"), cap = $("#stage-cap");
  let i = 0;
  const show = () => {
    const p = S.projects[i % S.projects.length];
    if (!stage.firstChild) stage.innerHTML = mock(p);
    const m = stage.firstChild;
    m.className = "mock " + p.layout;
    m.setAttribute("style", vars(p));
    cap.textContent = `${p.name}, ${p.category.toLowerCase()}`;
    i++;
  };
  show();
  if (!reduce && S.projects.length > 1) setInterval(() => { if (!document.hidden) show(); }, 4200);

  S.testimonials.forEach(t => $("#quotes").append(el("blockquote", "", `<p>${t.text}</p><footer>${t.name}, ${t.role}</footer>`)));
  S.faq.forEach(([q, a]) => $("#faq-list").append(el("details", "", `<summary>${q}</summary><p>${a}</p>`)));

  // Menu mobile
  const btn = $(".menu-btn"), nav = $(".nav");
  const setMenu = o => { nav.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $("#menu").addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  // Entrada discreta das seções
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
    document.querySelectorAll(".sec .wrap").forEach(n => { n.classList.add("rv"); io.observe(n); });
  }
})();