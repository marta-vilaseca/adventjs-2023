function organizeGifts(gifts) {
  let numbers = [];
  let regex = /[a-zA-Z]/g;

  for (let c in gifts) {
    numbers = gifts.split(regex);
    numbers = numbers.filter((elem) => elem != "");
  }

  let characters = gifts.match(regex);
  let finalArr = numbers.map((x, i) => [x, characters[i]]);

  let organized = [];

  for (let item in finalArr) {
    let quantity = finalArr[item][0];
    let gift = finalArr[item][1];
    let pales;
    let cajas;
    let sueltos;

    if (quantity >= 50) {
      pales = Math.floor(quantity / 50);
      cajas = Math.floor((quantity % 50) / 10);
      sueltos = quantity - pales * 50 - cajas * 10;
    } else {
      cajas = Math.floor(quantity / 10);
      sueltos = quantity - cajas * 10;
    }

    let palesStr;
    if (pales !== undefined) {
      palesStr = new Array(pales + 1).join("[" + gift + "]");
    }
    let cajasStr = new Array(cajas + 1).join("{" + gift + "}");
    let sueltosStr = new Array(sueltos + 1).join(gift);
    if (sueltosStr) sueltosStr = "(" + sueltosStr + ")";
    let organizedLine = palesStr
      ? palesStr + cajasStr + sueltosStr
      : cajasStr + sueltosStr;
    console.log(organizedLine);

    organized.push(organizedLine);
  }

  return organized.join("");
}

console.log(organizeGifts("76a11b")); // [a]{a}{a}(aaaaaa){b}(b)
