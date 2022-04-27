import { useState } from "react";

import { Provider } from "react-redux";

import Form from "./components/Form";
import Posts from "./components/Posts";

import { store } from "./store";
import ThemeContext, { theme } from "./btn.context";

import "./App.scss";

function App() {
  const [post, setPost] = useState({ id: null, text: "" });

  const clerInput = () => {
    setPost({ id: null, text: "" });
  };

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, id: Date.now(), text: e.target.value }));
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Form handleChange={handleChange} clerInput={clerInput} post={post} />
          <Posts handleChange={handleChange} />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
