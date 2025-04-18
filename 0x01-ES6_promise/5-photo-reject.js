export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (!filename) {
      resolve({
        status: 200,
        body: filename,
      });
    } else {
      reject(new Error(`${filename} cannot be processed`));
    }
  });
}
