import React, { useState } from 'react';

const convertToBase64 = (file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = (error) => {
    reject(error);
  };
});
function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [fileToShow, setFileToShow] = useState('');

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setIsSelected(true);
    console.log(base64);
    setFileToShow(base64);
  };

  const handleSubmission = () => {
  };

  return (
    <div>
      <img
        src={fileToShow}
        alt="Red dot"
      />
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>
            Filename:
            {' '}
            {selectedFile.name}
          </p>
          <p>
            Filetype:
            {' '}
            {selectedFile.type}
          </p>
          <p>
            Size in bytes:
            {' '}
            {selectedFile.size}
          </p>
          <p>
            lastModifiedDate:
            {' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button type="button" onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
export default FileUploadPage;
