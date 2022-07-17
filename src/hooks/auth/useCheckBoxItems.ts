import { useCallback, useEffect, useState } from "react";
import { TAgreement } from "../../components/data/signupField";

export type TCheckBoxItem = {
  id: TAgreement;
  checked: boolean;
  parentId: string | null;
};

const useCheckBoxItems = () => {
  const [list, setList] = useState<TCheckBoxItem[]>([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (list.length) {
      setAllChecked(list.every((item) => item.checked));
    }
  }, [list]);

  // 아이디로 해당 체크박스의 상태를 반환하는 함수
  const getItemState = useCallback(
    (id: string) => {
      return list.find((item) => item.id === id)?.checked;
    },
    [list]
  );

  // 부모체크박스의 상태를 변경
  const updateParent = useCallback(
    (id: string) => {
      const item = list.find((v) => v.id === id);
      const parent = list.find((v) => v.id === item?.parentId);
      if (!parent) return;
      const children = list.filter((v) => v.parentId === parent.id);
      if (
        children.length === children.filter((child) => child.checked).length
      ) {
        setList((prev) => {
          return prev.map((item) => {
            if (item.id === parent.id) {
              return { ...item, checked: true };
            }
            return item;
          });
        });
      } else if (
        children.length === children.filter((child) => !child).length
      ) {
        setList((prev) => {
          return prev.map((item) => {
            if (item.id === parent.id) {
              return { ...item, checked: false };
            }
            return item;
          });
        });
      } else {
        setList((prev) => {
          return prev.map((item) => {
            if (item.id === parent.id) {
              return { ...item, checked: true };
            }
            return item;
          });
        });
      }

      updateParent(parent.id);
    },
    [list]
  );

  const setUnchecked = useCallback(
    (id: string) => {
      setList((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, checked: false };
          }
          return item;
        });
      });
      // 자식이 있으면 자식도 체크해제
      list
        .filter((item) => item.parentId === id)
        .forEach((item) => {
          setUnchecked(item.id);
        });
    },
    [list]
  );

  const setChecked = useCallback(
    (id: string) => {
      setList((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, checked: true };
          }
          return item;
        });
      });
      // 자식이 있으면 자식도 체크
      list
        .filter((item) => item.parentId === id)
        .forEach((item) => {
          setChecked(item.id);
        });
    },
    [list]
  );

  // 체크박스 상태 변경
  const updateItemState = useCallback(
    (clickedId: string) => {
      const itemState = getItemState(clickedId);
      if (itemState === undefined) return;
      itemState ? setUnchecked(clickedId) : setChecked(clickedId);
      updateParent(clickedId);
    },
    [getItemState, setUnchecked, setChecked, updateParent]
  );

  // 초기 체크박스 리스트 초기화
  const registerValue = (state: TCheckBoxItem) => {
    setList((prev) => {
      if (prev.some((item) => item.id === state.id)) {
        return prev;
      }
      return [...prev, state];
    });
  };

  const setAllItemState = useCallback(() => {
    setList((prev) => {
      return prev.map((item) => {
        return { ...item, checked: !allChecked };
      });
    });
    setAllChecked((prev) => !prev);
  }, [setList, allChecked]);

  return { list, registerValue, updateItemState, allChecked, setAllItemState };
};

export default useCheckBoxItems;
