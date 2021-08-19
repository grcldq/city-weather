export const formatUnixDate = (
  time,
  options = {
    day: "2-digit",
    month: "2-digit",
  }
) => {
  const localDateTime = time ? new Date(time * 1000) : new Date();
  const formattedDate = localDateTime.toLocaleDateString(undefined, options);

  return formattedDate;
};

export const formatUnixTime = (time, timezone) => {
  const localDateTime = time ? new Date(time * 1000) : new Date();
  const formattedTime = localDateTime.toLocaleTimeString(undefined, {
    timeZone: timezone,
    timeZoneName: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedTime;
};

export const getWeatherImage = (code, size = "4x") => {
  const imgUrl = `http://openweathermap.org/img/wn/${code}@${size}.png`;

  return imgUrl;
};
