import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        <Rentals />
      </div>
    </div>
  );
}

export default App;
