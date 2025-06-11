const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { consultarGemini } = require("./services/geminiService");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/analise-curriculo", async (req, res) => {
    const { textoUsuario, tipo } = req.body;

    const prompt =
        tipo === "curriculo"
            ? `Você é um consultor de RH experiente. Analise e sugira melhorias para o seguinte perfil profissional, pensando em como estruturá-lo como um currículo eficaz. Considere as boas práticas de recrutamento e organização de conteúdo. Oriente com clareza, destacando os seguintes pontos:

1. Seção "Resumo Profissional":
- Ajude o usuário a criar um parágrafo introdutório que destaque sua experiência, área de atuação e principais competências.

2. Seção "Habilidades Técnicas":
- Organize as habilidades de forma clara e categorizada.
- Sugira uma estrutura como:
  Linguagens de Programação: (ex: JavaScript, Python)
  Backend: (ex: Node.js, Express, REST APIs)
  Frontend: (ex: React, HTML, CSS)
  Bancos de Dados: (ex: MongoDB, PostgreSQL)
  Ferramentas: (ex: Git, GitHub, Docker, Postman)
  Metodologias: (ex: Agile, Scrum)

3. Seção "Formação Acadêmica":
- Sugira como apresentar a formação: nome do curso, instituição, período ou status atual.

4. Seção "Experiências Profissionais ou Projetos":
- Oriente como listar experiências ou projetos, com foco em resultados e aprendizados.
- Inclua estrutura com: Nome do projeto/empresa, papel desempenhado, tecnologias usadas, resultados alcançados.

5. Linguagem e formatação:
- Certifique-se de que a linguagem esteja clara, objetiva e profissional.
- Evite frases muito genéricas. Dê exemplos práticos e sugestões específicas.

Aqui está o perfil fornecido pelo usuário:
${textoUsuario}`
            : `Você é um recrutador experiente. Simule uma entrevista de emprego com base no perfil profissional descrito abaixo. Comece com perguntas básicas, depois aprofunde com perguntas técnicas e comportamentais conforme o conteúdo apresentado:

Perfil do candidato:
${textoUsuario}`;
    try {
        const resposta = await consultarGemini(prompt);
        console.log("Resposta do Gemini:", resposta); // 👈 Adiciona isso
        res.json({ resposta });
    } catch (error) {
        console.error("Erro ao consultar Gemini:", error.response?.data || error.message); // 👈 Mostra erro detalhado
        res.status(500).json({ resposta: "Erro ao consultar Gemini." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
