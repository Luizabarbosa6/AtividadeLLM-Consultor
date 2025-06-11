const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function consultarGemini(prompt) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCeSQLUxl23TWHo0Bh0gBm5_W6pWNeX2RQ";

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  const { data } = await axios.post(url, body);
  return data.candidates[0].content.parts[0].text;
}

module.exports = { consultarGemini };
