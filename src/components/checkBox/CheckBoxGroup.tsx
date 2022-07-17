import React, { useEffect } from "react";
import useCheckBoxItems, {
  TCheckBoxItem,
} from "../../hooks/auth/useCheckBoxItems";

interface ICheckBoxGroupProps {
  children: React.ReactNode;
  onChange?: (list: TCheckBoxItem[]) => void;
}

interface ICheckBoxContext {
  registerValue: (state: TCheckBoxItem) => void;
  updateItemState: (clickedId: string) => void;
  list: TCheckBoxItem[];
  allChecked: boolean;
  setAllItemState: () => void;
}

export const CheckBoxContext =
  React.createContext<ICheckBoxContext | null>(null);

const CheckBoxGroup = ({ children, onChange }: ICheckBoxGroupProps) => {
  const { list, registerValue, updateItemState, allChecked, setAllItemState } =
    useCheckBoxItems();

  useEffect(() => {
    if (onChange) {
      onChange(list);
    }
  }, [list, onChange]);

  return (
    <CheckBoxContext.Provider
      value={{
        registerValue,
        updateItemState,
        list,
        allChecked,
        setAllItemState,
      }}
    >
      {children}
    </CheckBoxContext.Provider>
  );
};

export default CheckBoxGroup;
