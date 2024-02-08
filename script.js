const memeBtn = document.querySelector("#Generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-box img");
const authorName = document.querySelector(".author-name");

const memedetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  authorName.innerHTML = `Meme By: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      memedetails(data.url, data.title, data.author);
    });
};

memeBtn.addEventListener("click", generateMeme);
generateMeme();
