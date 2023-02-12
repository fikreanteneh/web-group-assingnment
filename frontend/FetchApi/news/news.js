import { getNews } from "./getNews.js";
import { deleteNews } from "./deleteNews.js";
import { updateNews } from "./updateNews.js";
import { postNews } from "./postNews.js";

const newsUploadForM = document.querySelector(".news-upload-form");
const postButton = document.querySelector(".news-upload-form button");

// !post and update form submit function for news
newsUploadForM.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("news upload");
  const imageSelected = newsUploadForM.querySelector(".selection").value;

  const newsUploadForMValues = newsUploadForM.querySelectorAll("input");
  const formDataToBeSent = {
    newsId: newsUploadForMValues[0].value,
    newsImage: imageSelected,
    newsUrl: newsUploadForMValues[1].value,
  };

  if (postButton.textContent === "Post") {
    const message = await postNews(formDataToBeSent); //
    if (!message) {
      alert("news not posted");
    } else {
      alert("news posted");
    }
  } else {
    const message = await updateNews(formDataToBeSent);
    console.log(message);
    if (!message) {
      alert("news not posted");
    } else {
      alert("news posted");
    }
  }
  // fetch the data again and updated view
  newsDisplay();
});

// display the fetched data
const newsDisplay = async () => {
  const newsPresentation = document.querySelectorAll(".news-uploads .card");
  const cards = [];
  newsPresentation.forEach((Element) => {
    cards.push(Element.querySelectorAll("span"));
  });
  const result = await getNews();
  console.log(result)
  result &&
    result.map((news, index) => {
      cards[index][2].textContent = news["newsUrl"];
      cards[index][1].textContent = news["newsImage"];
      cards[index][0].textContent = news["_id"];
    });
};

// delete
const deleteBtns = document.querySelectorAll(".NewsCard .deleteButton");
deleteBtns.forEach((delebtn) => {
  delebtn.addEventListener("click", async (e) => {
    const newsToBeDel =
      e.target.parentElement.parentElement.querySelector(".news-id");
    const id = newsToBeDel.textContent;

    const deleteRequest = await deleteNews(id);
    if (!deleteRequest) {
      alert("delete is not successful");
    } else {
      newsDisplay();
    }
  });
});

// ! rendering screen components on first load
document.addEventListener("DOMContentLoaded", async function () {
  newsDisplay();
});
