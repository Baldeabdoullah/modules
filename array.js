export { default as hello } from "./hello.js";

export const sum = (items) =>
  items.reduce((acc, item) => {
    return acc + item;
  });
