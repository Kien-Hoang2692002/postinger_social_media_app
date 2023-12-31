// accepts time in seconds returns HH:MM:SS
export const formatDuration = (time) => {
  const seconds = Math.ceil(time % 60)
    .toString()
    .padStart(2, 0);
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);
  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, 0);

  if (hours !== "00") {
    return hours + " : " + minutes + " : " + seconds;
  }

  return minutes + " : " + seconds;
};

export const formatText = (text, toLowerCase = true, maxLength = 11) => {
  const editedText =
    text?.length > maxLength ? text?.slice(0, maxLength - 1) + "..." : text;
  const result = toLowerCase ? editedText.toLowerCase() : editedText;

  return result;
};
