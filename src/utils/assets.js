const images = import.meta.glob("../assests/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getImageUrl(fileName) {
  return images[`../assests/images/${fileName}`] || "";
}
