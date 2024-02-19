import { Family, Footer, Header, Kingdom, Navbar } from "./components/";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />

      <Header />

      <div
        style={{
          background: "linear-gradient(to bottom, transparent, #242424 100%)",
          height: "20vh",
          position: "absolute",
          top: "90vh",
          width: "100%",
          zIndex: 2,
        }}
      />

      <Kingdom />

      <Family />

      <div
        style={{
          background: "linear-gradient(to top, transparent, #242424 100%)",
          height: "20vh",
          position: "absolute",
          bottom: "40vh",
          width: "100%",
          zIndex: 2,
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
