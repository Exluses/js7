export default () => {
  // BEGIN
  const button = document.getElementById("alert-generator");
  const alertsContainer = document.querySelector(".alerts");

  let counter = 1;

  button.addEventListener("click", () => {
    const alertElement = document.createElement("div");
    alertElement.className = "alert alert-primary";
    alertElement.textContent = `Alert ${counter}`;

    alertsContainer.prepend(alertElement);
    counter++;
  });

  alertsContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("alert")) {
      clickedElement.remove();
    }
  });
  // END
};
