
  

  // ! this is to delete already existing data to database
  const deleteNews  = async (id) => {
    console.log(id)
  try {
    const response = await fetch(`http://localhost:3000/news/${id}`, {
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

export { deleteNews };
