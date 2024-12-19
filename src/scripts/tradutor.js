const translateText = async (text, srcLang, destLang) => {
  try {
      const response = await fetch('https://translate.mentemaker.com.br', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              text: text,
              src: srcLang,  // Idioma da piada (padrão é 'en' para inglês)
              dest: destLang // Idioma para traduzir (padrão é 'pt' para português)
          }),
      });

      const data = await response.json();
      if (data.translated_text) {
          return data.translated_text;
      } else {
          return "Erro ao traduzir. Tente novamente!";
      }
  } catch (error) {
      console.error("Erro ao traduzir o texto:", error);
      return "Erro ao traduzir. Tente novamente!";
  }
};