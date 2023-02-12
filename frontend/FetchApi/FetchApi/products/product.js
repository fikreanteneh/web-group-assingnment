import { postProducts } from "./createProduct.js";
import { updateProducts } from "./updateProduct.js";
import { getProducts } from "./getProducts.js";
import { deleteProduct } from "./deleteProduct.js";

const productUploadForM = document.querySelector(".product-upload-form");
const postButton = document.querySelector(".product-upload-form button");

// !post and update form submit function for products
productUploadForM.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("upload");
  const productUploadFormValues = document.querySelectorAll("input");
  const imageSelected = productUploadForM.querySelector(".selection");

  const formDataToBeSent = {
    productID: productUploadFormValues[0].value,
    productTitle: productUploadFormValues[1].value,
    productImage: imageSelected.value,
    productPrice: Number(productUploadFormValues[2].value),
    startDate: String(productUploadFormValues[3].value),
    endDate: String(productUploadFormValues[4].value),
    productDescription: productUploadFormValues[5].value,
  };
  console.log(formDataToBeSent);

  if (postButton.textContent === "Upload") {
    const message = await postProducts(formDataToBeSent);
    console.log(message);
    if (!message) {
      alert("news not posted");
    } else {
      alert("news posted");
    }
  } else {
    const message = await updateProducts(formDataToBeSent);
    console.log(message);
    if (!message) {
      alert("product not updated");
    } else {
      alert("product updated");
    }
  }
  // fetch the data again and updated view
  productDisplay();
});

// display the fetched data
const productDisplay = async () => {
  const productPresentation = document.querySelectorAll(
    ".product-uploads .card"
  );
  const cards = [];
  productPresentation.forEach((Element) => {
    cards.push(Element.querySelectorAll("span"));
  });
  const result = await getProducts();
  console.log("cards" , cards)

  result &&
    result.map((product, index) => {
      cards[index][0].textContent = product["productTitle"];
      cards[index][1].textContent = product["productDescription"];
      cards[index][2].textContent = product["_id"];
      cards[index][3].textContent = product["productImage"];
      cards[index][4].textContent = product["productPrice"];
      cards[index][5].textContent = product["startDate"]
        .substring(0, 10)
        .split("-")
        .reverse()
        .join("-");
      cards[index][6].textContent = product["endDate"]
        .substring(0, 10)
        .split("-")
        .reverse()
        .join("-");
    });
};

// delete
const deleteBtns = document.querySelectorAll(".productCard .delete");
deleteBtns.forEach((delebtn) => {
  delebtn.addEventListener("click", async (e) => {
    const productToBeDel =
      e.target.parentElement.parentElement.querySelector(".product-id");

    const id = productToBeDel.textContent;
    const deleteRequest = await deleteProduct(id);
    if (!deleteRequest) {
      alert("delete is not successful");
    }
    productDisplay();
  });
});

// rendering screen components
document.addEventListener("DOMContentLoaded", async function () {
  productDisplay();
});
