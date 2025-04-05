import "./App.scss";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Pages from "./Pages/index";

const App = () => {
  return (
    <div className="App">
      <Pages />
    </div>
  );
};

export default App;
