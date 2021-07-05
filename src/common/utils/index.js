export function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

export function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}
