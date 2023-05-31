export default (document) => {
  // BEGIN
  const categoryElement = document.querySelector(".content h1");
  const descriptionElement = document.querySelector(".content .description");
  const articleElements = document.querySelectorAll(".content .links div");

  const title = categoryElement.textContent;
  const description = descriptionElement.textContent;

  const items = Array.from(articleElements).map((articleElement) => {
    const articleTitleElement = articleElement.querySelector("h2 a");
    const articleDescriptionElement = articleElement.querySelector("p");

    const articleTitle = articleTitleElement.textContent;
    const articleDescription = articleDescriptionElement.textContent;

    return {
      title: articleTitle,
      description: articleDescription,
    };
  });

  return {
    title,
    description,
    items,
  };
};
// END
