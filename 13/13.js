function calculateTime(deliveries) {
  const totalTime = 7 * 3600;
  let totalDelivery = 0;

  for (let delivery of deliveries) {
    let deliveryArr = delivery.split(":");

    let deliveryTime =
      Number(deliveryArr[0]) * 3600 +
      Number(deliveryArr[1]) * 60 +
      Number(deliveryArr[2]);

    totalDelivery += deliveryTime;
  }

  const difference = totalTime - totalDelivery;
  const sign = difference > 0;

  const time = Math.abs(difference);
  const hours = Math.trunc(time / 3600);
  const minutes = Math.trunc((time % 3600) / 60);
  const seconds = (time % 3600) % 60;

  const result = `${sign ? "-" : ""}${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return result;
}
