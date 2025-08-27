import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <div style={{ height: 500}}></div>
    </main>
  );
};

export default App;
