import "./App.css";

function App() {
  return (
    <div className="text-center flex flex-col justify-center gap-4 items-center w-full">
      <h1 className="text-3xl md:text-6xl lg:text-6xl text-center text-black">
        Welcome to our restaurant menu
      </h1>
      <p className="rounded text-black p-2">This is my initial app</p>
      <button className="rounded-lg bg-slate-50 text-black p-2 w-max">
        Let's go!
      </button>
    </div>
  );
}

export default App;
