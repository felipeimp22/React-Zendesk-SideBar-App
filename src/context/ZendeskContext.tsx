import React, { createContext, useState } from "react";
import ZAFClient from "zendesk_app_framework_sdk";

interface ZendeskContextProps {
  token: string | null;
  setToken: (token: string) => void;
}

export const ZendeskContext = createContext<ZendeskContextProps>({
  token: null,
  setToken: () => {},
});

export const ZendeskClient = ZAFClient.init();

export const ZendeskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <ZendeskContext.Provider value={{ token, setToken }}>
      {children}
    </ZendeskContext.Provider>
  );
};
