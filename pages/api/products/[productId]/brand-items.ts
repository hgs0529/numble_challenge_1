import { TRating } from "./vendoritems/[vendoritemId]";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type TBrandItem = {
  title: string;
  imageUrl: string;
  badgeUrl: string | null;
  rating: TRating;
  price: number;
  link: string;
};

export interface BrandItems {
  brandName: string;
  brandLogo: string;
  totalCount: number;
  description: string;
  brandShopLink: string;
  items: TBrandItem[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const productId = req.query.productId;
  const vendoritemId = req.query.vendoritemId;
  const itemId = req.query.itemId;
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
    )
    .then((res) => {
      return res.data;
    });

  const result: BrandItems = {
    brandName: data.brandName,
    brandLogo: data.logoImageUrl,
    totalCount: data.itemTotal,
    description: data.claimText,
    brandShopLink: data.brandShopLink,
    items: data.items.map((item: any) => ({
      title: item.title,
      imageUrl: item.imageUrl,
      badgeUrl: item.badgeUrl,
      rating: {
        count: item.ratingCount,
        average: item.ratingAverage,
      },
      price: item.salesPrice,
      link: item.link,
    })),
  };

  res.json(result);
}
