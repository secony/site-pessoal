/* Edite aqui: marca, contatos, projetos, depoimentos, FAQ e tecnologias. */
window.SITE = {
  brand: "Guilherme Secone",
  contact: {
    whatsapp: "",   // ex.: "5517999999999"
    email: "",      // ex.: "contato@seudominio.com"
    message: "Olá! Vim pelo seu site e quero criar o meu."
  },
  social: [{ label: "GitHub", url: "https://github.com/secony" }],
  stack: ["HTML", "CSS", "JavaScript", "Firebase", "Git", "GitHub", "Vercel"],

  // image: caminho de um screenshot em img/ (ex.: "img/barbearia.png"). Sem image, aparece um mockup.
  // layout do mockup: "hero" | "grid" | "split"
  projects: [
    { name: "Maycola do Corte", category: "Site para barbearia", layout: "hero",
      desc: "Serviços, galeria de cortes e agendamento pelo WhatsApp para uma barbearia em São José do Rio Preto.",
      url: "https://maycoladocorte.com.br/",  // confirme que está no ar
      image: "", colors: { bg: "#16130f", fg: "#efe6da", ac: "#c9a24e" } },
    { name: "Clínica Aurora", category: "Site institucional, demonstração", layout: "split",
      desc: "Apresentação de serviços e agendamento para uma clínica de fisioterapia.",
      url: "#", image: "", colors: { bg: "#f3f1ec", fg: "#1d2b2a", ac: "#2f6f66" } },
    { name: "Studio Lume", category: "Portfólio, demonstração", layout: "grid",
      desc: "Portfólio de fotografia com galeria em destaque e contato direto.",
      url: "#", image: "", colors: { bg: "#241a14", fg: "#efe6da", ac: "#c08a4e" } }
  ],

  // SUBSTITUIR por depoimentos reais.
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