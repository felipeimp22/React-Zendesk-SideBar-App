import React, { useEffect, useContext, JSX } from "react";
import { ZendeskProvider } from "./context/ZendeskContext";
import { ZendeskClient } from "./context/ZendeskContext";
import Sidebar from "./views/Sidebar";


const search = window.location.search.match(/(type|modal)=([a-z_]+)/);

let componentToShow: JSX.Element | null = null;

if (search && search[0] === "type=sidebar" && search[1] === "type") {
  componentToShow = <Sidebar />;
  ZendeskClient.invoke("resize", { width: "100%", height: "66vh" });
} else if (search && search[1] === "modal") {
// we can implement modal in the future
}

function App() {
  return (
    <ZendeskProvider>
      {componentToShow}
    </ZendeskProvider>
  );
}

export default App;
