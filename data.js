/* Edite aqui: marca, contatos, projetos, depoimentos, FAQ e tecnologias. */
window.SITE = {
  brand: "Guilherme Secone",           // trocar quando tiver marca definitiva
  contact: {
    whatsapp: "",                       // ex.: "5517999999999"
    email: "",                          // ex.: "contato@seudominio.com"
    message: "Olá! Vim pelo seu site e quero criar o meu."
  },
  social: [
    { label: "GitHub", url: "https://github.com/secony" }
    // { label: "Instagram", url: "https://instagram.com/..." }
  ],
  stack: ["HTML", "CSS", "JavaScript", "Firebase", "Git", "GitHub", "Vercel"],

  // layout: "hero" | "grid" | "split" — muda só a composição do mockup
  projects: [
    { name: "Clínica Aurora", category: "Site institucional", layout: "split",
      desc: "Apresentação de serviços e agendamento para uma clínica de fisioterapia.",
      url: "#", colors: { bg: "#f3f1ec", fg: "#1d2b2a", ac: "#2f6f66" } },
    { name: "Studio Lume", category: "Portfólio", layout: "grid",
      desc: "Portfólio de fotografia com galeria em destaque e contato direto.",
      url: "#", colors: { bg: "#14110f", fg: "#efe6da", ac: "#c08a4e" } },
    { name: "Casa Bruta", category: "Pequeno negócio", layout: "hero",
      desc: "Vitrine de móveis sob medida com pedido de orçamento por WhatsApp.",
      url: "#", colors: { bg: "#e7e2d8", fg: "#2a211a", ac: "#8a3b24" } }
  ],

  // SUBSTITUIR por depoimentos reais assim que existirem.
  testimonials: [
    { text: "[Depoimento de exemplo: descreva aqui o resultado do projeto.]", name: "Nome do cliente", role: "Empresa ou cargo" },
    { text: "[Depoimento de exemplo: fale sobre a experiência de trabalhar junto.]", name: "Nome do cliente", role: "Empresa ou cargo" }
  ],

  faq: [
    ["Quanto custa um site?", "O valor depende do tamanho, das funcionalidades e do conteúdo. Depois de uma conversa inicial, envio um orçamento fechado, sem custos surpresa."],
    ["Quanto tempo leva para criar?", "Uma landing page costuma levar menos tempo que um site com várias páginas ou funcionalidades. Informo o prazo no orçamento."],
    ["O site funciona no celular?", "Sim. Todo site é desenvolvido para funcionar bem em celulares, tablets e computadores."],
    ["Eu preciso ter domínio?", "O domínio (endereço como seunegocio.com.br) é recomendado. Se você ainda não tem, te oriento no registro e configuro tudo."],
    ["Faz alterações depois da entrega?", "Sim. Ajustes e suporte são combinados antes do início, para ficar claro o que está incluso."],
    ["Como funciona o pagamento?", "As condições são definidas no orçamento. [Defina aqui sua política: entrada, parcelas, formas de pagamento.]"]
  ]
};
