import fs from "fs";
import path from "path";

export const imageLoader = (baseFolder: string, folderName: string): string[] => {
  const dirPath = path.join(baseFolder, folderName);

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const filenames = fs.readdirSync(dirPath).filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

  return filenames.map((filename) => `/images/${folderName}/${filename}`);
}
