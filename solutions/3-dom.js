// BEGIN
function beautifyPage() {
  const bodyMainContent = document.body.innerHTML;
  const line = bodyMainContent.trim().split("\n");
  const newContent = line.map((line) => `<p>${line}</p>`).join("");

  document.body.innerHTML = newContent;
}

beautifyPage();

// END
