import React from "react";
import employees from "./employees"

var testImage = employees[0].screenshot;

// Using the public folder to source images:
// https://create-react-app.dev/docs/using-the-public-folder/
// However, the typical approach is usually as follows:
// https://create-react-app.dev/docs/adding-images-fonts-and-files/


function App() {
  return (
    <div>
      <p>Hello World</p>
      <img alt="Test" src={process.env.PUBLIC_URL + testImage} />
    </div>
  );
}

export default App;
