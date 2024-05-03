export function capitalizeSentence(sentence) {
  const words = sentence.split(" ");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
