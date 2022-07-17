import { ForwardRefExoticComponent } from "react";
import AllCheckItem from "./AllCheckItem";
import InternalCheckBox, { ICheckBoxProps } from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";

interface CompoundedComponent
  extends ForwardRefExoticComponent<ICheckBoxProps> {
  Group: typeof CheckBoxGroup;
  AllCheckItem: typeof AllCheckItem;
}

const CheckBox = InternalCheckBox as CompoundedComponent;
CheckBox.Group = CheckBoxGroup;
CheckBox.AllCheckItem = AllCheckItem;

export default CheckBox;
