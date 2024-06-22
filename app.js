document.addEventListener("DOMContentLoaded", () => {
  const clickButton = document.querySelector(".btn-info");
  const parag = document.querySelector("p");
  const cites = document.querySelector("cite");

  // *processing
  const making = async (data) => {
    const quote = quoteText(data);
    parag.textContent = quote;

    const ath = quoteAuthor(data);
    cites.textContent = ath;
  };

  // *get the quotes data from the API
  const getQuote = async () => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };

      const res = await axios.get("https://api.quotable.io/random", config);
      //   console.log(res.data.content);
      //   console.log(res.data.author);
      making(res);
    } catch (error) {
      return "error!";
    }
  };

  const quoteText = (res) => {
    return res.data.content;
  };

  const quoteAuthor = (res) => {
    return res.data.author;
  };

  //   *click
  clickButton.addEventListener("click", getQuote);
});
