function decode(message) {
  let result = message;

  const reverseText = () => {
    const pattern = result.match(/\([a-z\s]*\)/g);
    pattern?.forEach((str) => {
      result = result.replace(
        str,
        str.split("").slice(1, -1).reverse().join("")
      );
    });
  };

  reverseText();
  reverseText();

  return result;
}
