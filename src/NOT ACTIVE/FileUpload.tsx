/* import { useEffect, useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  /* 
  useEffect(() => {
    const files = JSON.parse(localStorage.getItem("uploadedFiles") ?? "{}");
    setUploadedFiles(Object.keys(files));
  }); */

/* const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    }
  };

  const saveFileLocalStorage = (base64: string, fileName: string) => {
    try {
      const files = JSON.parse(localStorage.getItem("uploadedFiles") ?? "{}");
      files[fileName] = base64;
      localStorage.setItem("uploadedFiles", JSON.stringify(files));
    } catch (error) {
      console.log("kunde inte spara filen", error);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        saveFileLocalStorage(base64String, selectedFile.name);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const viewFile = (fileName: string) => {
    const files = JSON.parse(localStorage.getItem("uploadedFiles") ?? "{}");
    const fileBase64 = files[fileName];
    const link = document.createElement("a");
    link.href = fileBase64;
    link.target = "_blank";
    link.click();
  };

  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        accept=".pdf"
        onChange={handleFileChange}
      />
      <button onClick={handleFileUpload}>L</button>
      {selectedFile && <p>Fil vald: {selectedFile.name}</p>}

      <h3>Uppladdade filer:</h3>
      <ul>
        {uploadedFiles.map((fileName) => (
          <li key={fileName}>
            {fileName} <button onClick={() => viewFile(fileName)}>Visa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUpload;
Går tyvärr inte :(
 */
