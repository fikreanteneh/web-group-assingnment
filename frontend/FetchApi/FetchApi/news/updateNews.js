// ! this is to update already existing data to database
const updateNews = async (formDataToBeSent) => {
    const id = formDataToBeSent.newsId;
  delete formDataToBeSent.productID;
  try {
    const response = await fetch(`http://localhost:3000/news/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToBeSent),
    });
    const data = await response.json();
    const update = "update success"; //!data.products
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { updateNews };
