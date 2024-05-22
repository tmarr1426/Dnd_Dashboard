<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> ec0154c255b2e1bae15ad67cc325a6a9de0b3d6f

const Upload_Stats = () => {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("/n")).split(",");
    const csvRows = string.slice(string.indexOf("/n") + 1).split(",");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvJeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <>
      <div
        style={{ marginLeft: "15em", display: "flex", flexDirection: "column" }}
      >
        <form>
          <h2>Upload Rolls</h2>
          <input
            type="file"
            id="csvFileInput"
            accept=".csv"
            onChange={handleOnChange}
          />
          <button
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload_Stats;
