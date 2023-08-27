import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/queryClient";
import { SearchProvider } from "./Context/SearchProvider";
import { App } from "./App";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
