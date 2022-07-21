import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type TImage = {
  detailImage: string;
  origin: string;
  preloadImage: string;
  thumbnailImage: string;
};

export interface ProductInfo {
  images: TImage[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.productId;
  const vendoritemId = req.query.vendoritemId;
  const data = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/vendoritems/${vendoritemId}`
    )
    .then((res) => {
      return res.data;
    });

  console.log(data);

  res.json({
    id: data.itemId,
    name: data.itemName,
    images: data.images,
    sellingInfo: data.sellingInfoVo.sellingInfo,
    deliveryBadge: data.quantityBase[0].delivery.badgeUrl,
    originPrice: data.quantityBase[0].price.originPrice,
    salePrice: data.quantityBase[0].price.salePrice,
    rating: {
      count: data.ratingCount,
      average: data.ratingAverage,
    },
    coupickIcon:
      "//image8.coupangcdn.com/image/badges/cou_pick/web/coupick@2x.png",
    brandName: "Apple",
  });
}
