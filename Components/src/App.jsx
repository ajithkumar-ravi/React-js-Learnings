import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";

function App() {
  let user = "Ajith";

  return (
    <>
      <Header user={user} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
