import "./App.css";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div>
      <p className="text-center pt-3 text-3xl font-bold text-red-700 uppercase">
        <marquee>Latest News</marquee>
      </p>
      <NewsList />
    </div>
  );
}

export default App;
