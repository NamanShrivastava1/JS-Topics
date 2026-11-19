// 1. Create a Blob from text
const textBlob = new Blob(["Hello, world!"], { type: "text/plain" });

// 2. Read a Blob's content using modern Promise-based methods
const text = await textBlob.text();
console.log(text); // Outputs: "Hello, world!"

// 3. Create a temporary URL to preview or download the Blob
const blobUrl = URL.createObjectURL(textBlob);
console.log("Blob URL:", blobUrl)

// Always release the URL from memory when done to prevent memory leaks
URL.revokeObjectURL(blobUrl);
