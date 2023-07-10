import * as Components from "./assets/components/card";
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
/** */
const App = () => {
  /** */
  /** Website title */
  document.title = "Eternal Eclipse";
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          index
          path="/eternal-eclipse/dev/"
          element={<Body />}
        />
        <Route
          path="/eternal-eclipse/dev/Ranks"
          element={<Body content={<Components.Ranks />} />}
        />
        <Route
          path="/eternal-eclipse/dev/Characters"
          element={<Body content={<Components.Characters />} />}
        />
        <Route path="*" element={<Body />} />
      </Routes>
      <Footer />
    </>
  );
};
/** */
export default App;
