import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import horror from "./data/horror.json";

function App() {
  return (
    <div className="App">
      <WarningSign text="Warning" />
      <MyBadge color="danger" text="This is a Badge" />
      <SingleBook book={horror[0]} />
      <BookList cathegory={horror} />
    </div>
  );
}

export default App;
