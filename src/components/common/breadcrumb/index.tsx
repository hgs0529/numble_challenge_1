import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { BreadcrumbItem } from "../../../../pages/api/products/[productId]/breadcrumb";

interface IBreadcrumbProps {
  data?: BreadcrumbItem[];
}

const Breadcrumb = ({ data }: IBreadcrumbProps) => {
  return (
    <Wrapper>
      {data?.map((item, index) => (
        <BreadcrumbItem key={index}>
          <Link href={item.url}>
            <a>{item.name}</a>
          </Link>
        </BreadcrumbItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  padding: 3px 0;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  justify-content: center;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.8);

  a:hover {
    color: #346aff;
    text-decoration: underline;
  }

  &:not(:last-child):after {
    content: ">";
    font-family: sans-serif;
    margin: 0 0.5rem;
  }
`;

export default Breadcrumb;
