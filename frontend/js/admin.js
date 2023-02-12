
const uploadedProductsButtons = document.querySelectorAll(
    ".productCard .upload"
  );
  
  const productUploadForm = document.querySelector(".product-upload-form");
  
  uploadedProductsButtons.forEach((Element) => {
    Element.addEventListener("click", (e) => {
      const productInfo = e.target.parentElement.parentElement.querySelectorAll("span");
      console.log(productInfo)
      //! prepare the data to be placed in the form
      const imageSelected = productUploadForm.querySelector(".selection");
  console.log(imageSelected)
  
      const formData = {
        ProductID: productInfo[2].textContent,
        ProductTitle: productInfo[0].textContent,
        productImage: imageSelected.value,
        Price: productInfo[4].textContent,
        StartDate: productInfo[5].textContent,
        EndDate: productInfo[6].textContent,
        ProductDescription: productInfo[1].textContent,
      };
      console.log(formData);
      //! gather the form inputs to accept the data
      const productUploadFormInputs = productUploadForm.querySelectorAll("input");
      console.log(productUploadFormInputs)
      // ! set the data
      productUploadFormInputs[0].value = formData["ProductID"];
      productUploadFormInputs[1].value = formData["ProductTitle"];
      imageSelected.value = formData["ProductImage"];
      // imageSelected.value = "image";
      productUploadFormInputs[2].value = Number(formData["Price"]);
  
      const startDate = new Date(formData["StartDate"]);
      const year = startDate.getFullYear();
      const month = (startDate.getMonth() + 1).toString().padStart(2, "0");
      const day = startDate.getDate().toString().padStart(2, "0");
      const formattedStartDate = `${year}-${month}-${day}`;
      productUploadFormInputs[3].value = formattedStartDate;
      // ----
      const endDate = new Date(formData["StartDate"]);
      const yearEnd = endDate.getFullYear();
      const monthEnd = (endDate.getMonth() + 1).toString().padStart(2, "0");
      const dayEnd = endDate.getDate().toString().padStart(2, "0");
      const formattedEndDate = `${yearEnd}-${monthEnd}-${dayEnd}`;
      productUploadFormInputs[4].value = formattedEndDate;
      productUploadFormInputs[5].value = formData["ProductDescription"];
      // ! set the button to red update
      const uploadHeaders = productUploadForm.querySelector("h3");
      uploadHeaders.innerText = "Update Product";
      uploadHeaders.style.color = "red";
      const postButtons = productUploadForm.querySelector("button");
      postButtons.innerText = "Update";
      postButtons.classList.remove("bg-success");
      postButtons.classList.add("bg-danger");
    });
  });
  
  const newsUploadForm = document.querySelector(".news-upload-form");
  const uploadedNewsButtons = document.querySelectorAll(".NewsCard .updateButton");
  
  
  uploadedNewsButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const imageSelected = newsUploadForm.querySelector(".selection");
      const newsInfo = e.target.parentElement.parentElement.querySelectorAll("span");
      const newsData = {
        NewsID: newsInfo[0].textContent,
        newsImage: imageSelected.value,
        newsUrl: newsInfo[1].textContent,
      };
      //! gather the form inputs to accept the data
      const newsUploadFormInputs = newsUploadForm.querySelectorAll("input");
      // ! set the data
      newsUploadFormInputs[0].value = newsData["NewsID"];
      imageSelected.value = newsData["newsImage"];
      newsUploadFormInputs[1].value = newsData["newsUrl"];
  
      // ! exit the form ui
      const uploadHeaders = newsUploadForm.querySelector("h3");
      uploadHeaders.innerText = "Edit News";
      uploadHeaders.style.color = "red";
      const postButtons = newsUploadForm.querySelector("button");
      postButtons.innerText = "Edit";
      postButtons.classList.remove("bg-success");
      postButtons.classList.add("bg-danger");
    });
  });
  