import path from 'path';

export const entry = "./src/app.js";
export const output = {
  path: path.join(__dirname, "public"),
  filename: "bundle.js"
};