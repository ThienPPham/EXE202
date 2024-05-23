import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'antd'

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
