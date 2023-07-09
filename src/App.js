import Navigation from "./structure/navigation";
import Footer from "./structure/footer";
import Body from "./structure/body";
/** */
const App = () => {
  /** Website title */
  document.title = "Eternal Eclipse";
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
};
/** */
export default App;
