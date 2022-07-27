import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";
import { TDelivery } from "../../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import Radio from "../../common/radio";

interface Props {
  delivery?: TDelivery[];
  register?: UseFormRegisterReturn;
}

const Delivery = ({ delivery, register }: Props) => {
  return (
    <DeliveryWrapper>
      <DeliveryTitle>무료배송</DeliveryTitle>
      <DeliveryOptions>
        {delivery?.map((v, i) => (
          <div key={i}>
            <Radio value={v.id} register={register} checked={i === 0}>
              <Option>
                {`${v.descriptions.split("도착 보장")[0]}도착 보장`}
              </Option>
              <OptionCount>{v.descriptions.split("도착 보장")[1]}</OptionCount>
            </Radio>
          </div>
        ))}
      </DeliveryOptions>
    </DeliveryWrapper>
  );
};

const DeliveryOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Option = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #00891a;
  margin-left: 5px;
`;

const OptionCount = styled.span`
  font-size: 12px;
`;

const DeliveryTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
`;

const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

export default Delivery;
