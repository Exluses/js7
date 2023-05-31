// BEGIN
export default function extractData (doc) {
    const elems = doc.querySelectorAll('body *');
    const result = [];
    elems.forEach((elem) => {
      if (elem.tagName === 'P') {
        result.push(elem.textContent.trim());
      }
    });
    return result;
  };  
// END
