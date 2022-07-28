import styled from "@emotion/styled";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import { TInsurance } from "../../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import Button from "../../common/button";
import CheckBox from "../../common/checkBox";

interface Props {
  insurance?: TInsurance;
  register?: UseFormRegisterReturn;
}

const Insurance = ({ insurance, register }: Props) => {
  return (
    <InsuranceWrapper>
      <CheckBox description={insurance?.description} register={register}>
        <InsuranceTitle>
          {insurance && (
            <Image
              src={insurance.iconUrl}
              alt="appleCare"
              height={20}
              width={20}
            />
          )}
          <strong>{insurance?.name}</strong>
          <span>{insurance?.price}</span>
          <Button shape="icon">
            <FontAwesomeIcon icon={faExclamation} size="xs" />
          </Button>
        </InsuranceTitle>
      </CheckBox>
    </InsuranceWrapper>
  );
};

const InsuranceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 7px;
  font-size: 14px;
`;

const InsuranceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  padding: 15px 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

export default Insurance;
