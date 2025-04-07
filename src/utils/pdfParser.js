import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

export const extractTextFromPDF = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

      let text = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item) => item.str).join(" ") + "\n";
      }
      resolve(text);
    };

    reader.readAsArrayBuffer(file);
  });
};
