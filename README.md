# 🧠 Consultor de Currículo e Simulador de Entrevistas com LLM

Projeto da disciplina **Análise e Projeto de Sistemas** — Utilizando Large Language Models (LLM) para orientar usuários na preparação para o mercado de trabalho.

## 📌 Descrição

Este projeto backend utiliza um modelo de linguagem (LLM) para oferecer dois serviços principais:

1. **Análise de Currículo**: O usuário envia seu currículo em texto, e o sistema gera sugestões de melhoria com base em boas práticas de recrutamento.
2. **Simulador de Entrevistas**: O sistema simula uma entrevista com perguntas e respostas baseadas na área de interesse do candidato.

---

## 💡 Funcionalidades

- ✅ Upload de currículo (em texto)
- ✅ Geração de feedback automatizado com LLM
- ✅ Simulação de entrevista personalizada (perguntas e respostas)
- ✅ Interface simples via API REST ou frontend (opcional)
- ✅ Foco em profissões de tecnologia (adaptável para outras áreas)

---

## 🔧 Tecnologias Utilizadas

- Node.js ou Python (dependendo da versão implementada)
- OpenAI GPT (via API)
- Express.js (se Node)
- Flask (se Python)
- dotenv (para segurança com API keys)

---

## ⚙️ Como Executar

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-projeto-llm.git
Crie um arquivo .env com sua chave de API:

env
Copiar
Editar
OPENAI_API_KEY=sua-chave-aqui
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor:

bash
Copiar
Editar
node index.js
Use os endpoints:

POST /analisar-curriculo

POST /simular-entrevista

🔍 Exemplo de Uso
Currículo analisado:
json
Copiar
Editar
{
  "curriculo": "Sou desenvolvedora front-end com experiência em React e projetos de acessibilidade..."
}
🔎 Resposta:

scss
Copiar
Editar
• Adicione métricas de impacto nos projetos (ex: aumento de performance em 30%)
• Inclua palavras-chave de tecnologias específicas (React, TypeScript)
• Adicione links para portfólio ou GitHub
🤖 Sobre o LLM
O modelo utilizado é capaz de:

Identificar pontos fracos e fortes em descrições de experiência

Gerar perguntas relevantes com base no cargo/área

Simular respostas de forma profissional

👩‍💻 Desenvolvido por Luiza

📎 Observações
Projeto acadêmico com fins de estudo.

A API da OpenAI possui limites gratuitos e pode requerer chave válida.
