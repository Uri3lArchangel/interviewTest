import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "@/src/pages/home";

function App({ infurakey, formatic }) {
  return (
    <div className="App">
      <Home infurakey={infurakey} formatic={formatic} />
    </div>
  );
}

export default App;

export async function getServerSideProps() {
  const infurakey = process.env.INFURA_ID;
  const formatic = process.env.FORMATICKEY;
  return {
    props: {
      infurakey,
      formatic,
    },

  };
}
