import React, { useState } from "react";
import axios from "axios";
import { generateMatrix } from "../../backend/main";
export default function Uploader({ setNodes, setPropsMatrix }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [loader, setLoader] = useState(null);

  const onChangeHandler = (event) => {
    var files = event.target.files;
    if (true) {
      setSelectedFile(files);
    }
  };

  const onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }

    axios
      .post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      })

      .then((res) => {
        // then print response status
        console.log(res.statusText);
        generateMatrix();
      });
  };

  const checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = "";
    // list allow mime type
    const types = ["file/js", "file/txt", "text/plain"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      return false;
    }
    return true;
  };

  const handleClick = (event) => {
    document.getElementById("hiddenFileInput").click();
  };
  console.log(selectedFile);

  const renderSelectedFiles = () => {
    const renderedSelectedFiles = [];
    for (var x = 0; x < selectedFile.length; x++) {
      renderedSelectedFiles.push(
        <div className="filebox">{selectedFile[x].name}</div>
      );
    }
    return renderedSelectedFiles;
  };
  const renderedSelectedFiles = renderSelectedFiles();
  return (
    <div className="uploader">
      <div className="uploader_title">Upload files</div>

      <label className="custom-file-upload">
        <input
          type="file"
          class="form-control"
          id="hiddenFileInput"
          style={{ display: "none" }}
          multiple
          onChange={onChangeHandler}
        />
        <button className="choose_files_button" onClick={handleClick}>
          Choose files
        </button>
      </label>
      <button
        type="button"
        class="btn btn-success btn-block upload_button"
        onClick={onClickHandler}
      >
        Upload
      </button>
      <div className="uploader_title">Files</div>
      {renderedSelectedFiles}
    </div>
  );
}
