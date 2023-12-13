function manufacture(gifts, materials) {
  const listofgifts = gifts.filter((gift) => {
    for (let i = 0; i < gift.length; i++) {
      if (materials.indexOf(gift[i]) === -1) {
        return false;
      }
    }
    return true;
  });
  return listofgifts;
}
