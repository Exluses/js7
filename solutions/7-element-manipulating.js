import camelCase from "lodash/camelCase";

// BEGIN
export default function (document) {
  const elements = document.body.getElementsByTagName("*");
  for (const element of elements) {
    const classNames = Array.from(element.classList);
    for (const className of classNames) {
      const normalClassName = camelCase(className);
      element.classList.replace(className, normalClassName);
    }
  }
}
// END
