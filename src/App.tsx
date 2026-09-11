import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="demo-section">
          <h1>Dev Stack</h1>
          <p>
            Build your perfect developer stack with modern technologies.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;