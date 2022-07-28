import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type TDetailImage = {
  id: number;
  imageUrl: string;
};

export type TProductEssential = {
  title: string;
  description: string;
};

export interface ProductDetail {
  details: TDetailImage[];
  essentials: TProductEssential[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.productId;
  const vendoritemId = req.query.vendoritemId;
  const itemId = req.query.itemId;
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
    )
    .then((res) => {
      return res.data;
    });

  const result: ProductDetail = {
    details: data.details.map((detail: any, i: number) => ({
      id: i,
      imageUrl: detail.vendorItemContentDescriptions[0].content,
    })),
    essentials: data.essentials,
  };

  res.json(result);
}
