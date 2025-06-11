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
    ? `Você é um consultor de RH experiente. Analise e sugira melhorias para o seguinte perfil profissional, estruturando-o como um currículo eficaz. Forneça orientações claras e objetivas sobre como organizar e apresentar cada parte, sem usar marcadores como asteriscos (*), traços (-) ou bullets. Prefira uma resposta com seções bem delimitadas por títulos, e o conteúdo em forma de parágrafo corrido ou enumeração simples.

Instruções:

1. Resumo Profissional:
Descreva como o usuário pode escrever um parágrafo introdutório sobre sua experiência, área de atuação e competências.

2. Habilidades Técnicas:
Oriente como listar as habilidades separadas por categoria (ex: Linguagens de Programação, Backend, Frontend, Bancos de Dados, Ferramentas, Metodologias).

3. Formação Acadêmica:
Explique como formatar corretamente essa seção com curso, instituição e período.

4. Experiências Profissionais ou Projetos:
Instrua como apresentar os projetos ou experiências anteriores, com nome, papel desempenhado, tecnologias usadas e resultados obtidos.

5. Linguagem e Apresentação:
Assegure-se de que o tom seja profissional, direto e com exemplos específicos quando necessário. Evite repetições ou frases genéricas.

Aqui está o perfil fornecido pelo usuário:
${textoUsuario}`
    : `Você é um recrutador experiente. Simule uma entrevista de emprego com base no perfil profissional descrito abaixo. Comece com perguntas básicas e evolua para perguntas técnicas e comportamentais, adaptadas ao conteúdo apresentado. Escreva de forma clara e sem usar marcadores como asteriscos (*), traços (-) ou bullets. 

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
