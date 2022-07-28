import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  defaultTab?: string;
}

interface TabsContextProps {
  setActiveTab: (tabName: string) => void;
  activeTab: string;
}

export const tabsContext = createContext<TabsContextProps | null>(null);

const Tabs = ({ children, defaultTab = "" }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <tabsContext.Provider value={{ setActiveTab, activeTab }}>
      {children}
    </tabsContext.Provider>
  );
};

export default Tabs;
