// ! this is to upload new data to database
const postProducts = async (formDataToBeSent) => {
  try {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToBeSent),
    });
    const data = await response.json();
    const post = "post success"; //!data.products
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { postProducts };
