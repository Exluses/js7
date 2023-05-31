// BEGIN
export default function prettify(document) {
  const divElements = document.querySelectorAll("div");
  divElements.forEach((divElement) => {
    Array.from(divElement.childNodes).forEach((node) => {
      if (node instanceof Text && node.textContent.trim() !== "") {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = node.textContent;
        node.replaceWith(paragraphElement);
      }
    });
  });
}
// END
