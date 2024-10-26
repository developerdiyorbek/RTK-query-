import Counter from "./components/Counter";
import Products from "./components/Products";

function App() {
  return (
    <main>
      <h1 className="text-center font-bold text-2xl my-5">
        Fetching data with RTK query
      </h1>
      <Counter />
      <Products />
    </main>
  );
}

export default App;
