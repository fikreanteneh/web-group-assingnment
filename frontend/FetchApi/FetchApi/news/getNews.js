
  // ! this is the get fetch to show the data from the database in the section
const getNews = async () => {
  try {
    const response = await fetch(`http://localhost:3000/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const result = data.News;
    return result;
  } catch (error) {
    console.error(error);
  }
};
export { getNews };

  