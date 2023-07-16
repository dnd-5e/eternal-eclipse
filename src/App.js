/** Imports */
/** Basic */
import { Routes, Route } from "react-router-dom";
import * as React from "react";
/** Custom */
/** Structures */
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
/** Pages */
import * as Pages from "./pages/rank";
/** Components */
import * as Components from "./assets/components/card";
import { FullScreenModal } from "./structures/modal";
/** Pictures */
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";
/** Define App structure */
const App = () => {
  /** Website title / Tab name */
  document.title = "Eternal Eclipse";
  /** States */
  /** */
  const [modal, setModal] = React.useState(false);
  /** */
  const [image, setImage] = React.useState(placeholder);
  const [name, setName] = React.useState("     Placeholder");
  /** */
  const [expanded, setExpanded] = React.useState(false);
  /** Render Structure */
  return (
    <>
      <Navigation />
      <FullScreenModal
        modal={modal}
        image={image}
        name={name}
        setModal={setModal}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Routes>
        <Route path="/eternal-eclipse/dev/" element={<Body />} />
        <Route
          path="/eternal-eclipse/dev/Ranks"
          element={
            <Body
              content={
                <Pages.Ranks
                  setModal={setModal}
                  setImage={setImage}
                  setName={setName}
                />
              }
            />
          }
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
/** Exports */
export default App;
