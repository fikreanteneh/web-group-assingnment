// ! this is to update already existing data to database
const updateProducts = async (formDataToBeSent) => {
  const id = formDataToBeSent.productID;
  delete formDataToBeSent.productID;
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
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

export { updateProducts };
