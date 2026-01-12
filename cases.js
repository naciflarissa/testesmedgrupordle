const cases = [
  {
    name: "Síndrome de má absorção intestinal",
    symptoms: ["Esteatorreia", "Distensão abdominal", "Diarreia crônica", "Déficit de crescimento"],
    group: "Crianças",
    area: "Gastroenterologia",
    booklets: ["2025 Doenças Intestinais", "2025 Pediatria Geral"],
    summary: "Redução da absorção de nutrientes pelo intestino, comum na introdução alimentar."
  },
  {
    name: "Pancreatite aguda",
    symptoms: ["Dor abdominal intensa", "Náuseas", "Vômitos", "Febre"],
    group: "Adultos",
    area: "Gastroenterologia",
    booklets: ["2025 Doenças do Pâncreas", "2025 Síndrome Álgica"],
    summary: "Inflamação súbita do pâncreas, muitas vezes ligada a álcool ou cálculos."
  },
  {
    name: "Cirrose",
    symptoms: ["Icterícia", "Ascite", "Circulação colateral", "Ginecomastia"],
    group: "Qualquer",
    area: "Hepatologia",
    booklets: ["2025 Cirrose Hepática", "2026 Hipertensão Porta"],
    summary: "Fibrose hepática avançada com formação de nódulos."
  },
  {
    name: "Mania",
    symptoms: ["Euforia", "Fala acelerada", "Autoestima inflada", "Insônia"],
    group: "Jovens adultos",
    area: "Psiquiatria",
    booklets: ["2025 Psiquiatria", "2025 Transtornos do Humor"],
    summary: "Estado de humor elevado característico do transtorno bipolar."
  },
  {
    name: "Alzheimer",
    symptoms: ["Perda de memória", "Desorientação", "Déficit de linguagem"],
    group: "Idosos",
    area: "Neurologia",
    booklets: ["2025 Neurologia", "2025 Geriatria"],
    summary: "Demência neurodegenerativa progressiva mais comum."
  },
  {
    name: "Doença de Parkinson",
    symptoms: ["Bradicinesia", "Rigidez", "Tremor de repouso", "Instabilidade postural"],
    group: "Idosos",
    area: "Neurologia",
    booklets: ["2025 Neurologia", "2025 Distúrbios do Movimento"],
    summary: "Degeneração dos neurônios dopaminérgicos da substância negra."
  },
  {
    name: "Asma",
    symptoms: ["Dispneia", "Chiado no peito", "Tosse seca", "Aperto no peito"],
    group: "Crianças",
    area: "Pneumologia",
    booklets: ["2025 Pneumologia", "2025 Pediatria Geral"],
    summary: "Doença inflamatória crônica das vias aéreas com hiperresponsividade."
  },
  {
    name: "Doença Pulmonar Obstrutiva Crônica",
    symptoms: ["Dispneia aos esforços", "Tosse produtiva", "Pigarro matinal"],
    group: "Idosos",
    area: "Pneumologia",
    booklets: ["2025 Pneumologia", "2025 Doenças Tabágicas"],
    summary: "Obstrução crônica do fluxo aéreo, geralmente associada ao tabagismo."
  },
  {
    name: "Infarto Agudo do Miocárdio",
    symptoms: ["Dor torácica", "Sudorese", "Náuseas", "Irradiação para braço"],
    group: "Adultos",
    area: "Cardiologia",
    booklets: ["2025 Cardiologia", "2025 Síndrome Álgica"],
    summary: "Necrose miocárdica por obstrução coronariana aguda."
  },
  {
    name: "Acidente Vascular Cerebral Isquêmico",
    symptoms: ["Hemiparesia", "Disartria", "Desvio de rima", "Confusão mental"],
    group: "Idosos",
    area: "Neurologia",
    booklets: ["2025 Neurologia Vascular", "2025 Emergências Médicas"],
    summary: "Déficit neurológico súbito por obstrução arterial cerebral."
  },
  {
    name: "Hipotireoidismo",
    symptoms: ["Fadiga", "Ganho de peso", "Intolerância ao frio", "Pele seca"],
    group: "Adultos",
    area: "Endocrinologia",
    booklets: ["2025 Endocrinologia", "2025 Metabolismo"],
    summary: "Deficiência de hormônios tireoidianos reduzindo o metabolismo."
  },
  {
    name: "Tuberculose Pulmonar",
    symptoms: ["Tosse persistente", "Febre", "Sudorese noturna", "Perda de peso"],
    group: "Qualquer",
    area: "Infectologia",
    booklets: ["2025 Pneumologia", "2025 Infectologia"],
    summary: "Infecção bacteriana pelo bacilo de Koch, afetando principalmente os pulmões."
  },
  {
    name: "Dengue",
    symptoms: ["Febre", "Dor retroorbital", "Mialgia", "Exantema"],
    group: "Qualquer",
    area: "Infectologia",
    booklets: ["2025 Infectologia", "2025 Medicina Tropical"],
    summary: "Arbovirose aguda febril transmitida pelo mosquito Aedes aegypti."
  },
  {
    name: "Apendicite Aguda",
    symptoms: ["Dor em fossa ilíaca direita", "Anorexia", "Náuseas", "Febre"],
    group: "Jovens adultos",
    area: "Cirurgia Geral",
    booklets: ["2025 Abdome Agudo", "2025 Gastroenterologia"],
    summary: "Inflamação do apêndice cecal, principal causa de abdome agudo cirúrgico."
  },
  {
    name: "Esquizofrenia",
    symptoms: ["Alucinações", "Delírios", "Discurso desorganizado", "Isolamento social"],
    group: "Jovens adultos",
    area: "Psiquiatria",
    booklets: ["2025 Psiquiatria", "2025 Psicose"],
    summary: "Transtorno mental grave com distorção da realidade e pensamento."
  }
];