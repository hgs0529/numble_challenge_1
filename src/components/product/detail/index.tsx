import React from "react";
import Tabs from "../../common/tabs";
import Tab from "../../common/tabs/Tab";
import TabList from "../../common/tabs/TabList";

const ProductDetail = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>상품상세</Tab>
        <Tab>상품평</Tab>
        <Tab>상품문의</Tab>
        <Tab>배송/교환/반품 안내</Tab>
      </TabList>
    </Tabs>
  );
};

export default ProductDetail;
