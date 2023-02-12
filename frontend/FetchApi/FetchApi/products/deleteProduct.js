
  

  // ! this is to delete already existing data to database
  const deleteProduct  = async (id) => {
    console.log(id)
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { deleteProduct };
