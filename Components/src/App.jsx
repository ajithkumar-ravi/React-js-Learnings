import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";

function App() {
  let user = "Ajith";

  return (
    <>
      <div className="app">
        <Header user={user} />
        <Content />
        <Footer user = "ak"/>
      </div>
    </>
  );
}

export default App;
