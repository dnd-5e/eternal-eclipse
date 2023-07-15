import * as Components from "./assets/components/card";
import * as Pages from "./pages/rank";
import Navigation from "./structures/navigation";
import Footer from "./structures/footer";
import Body from "./structures/body";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { FullScreenModal } from "./structures/modal";
import placeholder from "./assets/pics/placeholders/imgPlaceholder.png";
/** */
const App = () => {
  /** */
  /** Website title */
  document.title = "Eternal Eclipse";
  const [modal, setModal] = React.useState(false);
  const [image, setImage] = React.useState(placeholder);
  const [name, setName] = React.useState("     Placeholder");
  return (
    <>
      <Navigation />
      <FullScreenModal
        modal={modal}
        image={image}
        name={name}
        setModal={setModal}
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
/** */
export default App;
