import React from "react";
import { createStore } from "./src/application/store";
import { appReducers } from "./src/application";
import { Provider } from "react-redux";

const setupApp = () => {
  return createStore({}, appReducers);
};

const AppProvider = (props) => {
  const { children } = props;
  const [store, setStore] = React.useState(null);

  React.useEffect(() => {
    const newStore = setupApp();
    setStore(newStore);
  }, []);

  if (!store) {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
