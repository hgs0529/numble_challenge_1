import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type TImage = {
  detailImage: string;
  origin: string;
  preloadImage: string;
  thumbnailImage: string;
};

export type TDelivery = {
  id: number;
  badgeUrl: string;
  descriptions: string;
  countDown: string | null;
};

export type TPrice = {
  originPrice: string;
  salePrice: string;
  discountRate: string;
  priceUnit: string;
};

export type TRating = {
  count: number;
  average: number;
};

export type TCcid = {
  ccidText: string;
  iconUrl: string;
};

export type TCashBack = {
  finalCashBackAmt: number;
  iconUrl: string;
};

export type TInsurance = {
  iconUrl: string;
  name: string;
  price: string;
  description: string;
};

export interface ProductInfo {
  id: number;
  name: string;
  sellingInfo: string[];
  delivery: TDelivery[];
  images: TImage[];
  price: TPrice;
  rating: TRating;
  coupickIcon: string;
  brandName: string;
  ccid: TCcid;
  cashBack: TCashBack;
  insurance: TInsurance;
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

  const result: ProductInfo = {
    id: data.itemId,
    name: data.itemName,
    images: data.images,
    sellingInfo: data.sellingInfoVo.sellingInfo,
    delivery: data.quantityBase[0].deliveryList.map(
      (delivery: any, i: number) => ({
        id: i,
        badgeUrl: delivery.badgeUrl,
        descriptions: delivery.descriptions.replace(/<[^>]+>/g, ""),
        countDown: delivery.countDownMessage,
      })
    ),
    price: {
      originPrice: data.quantityBase[0].price.originPrice,
      salePrice: data.quantityBase[0].price.salePrice,
      discountRate: data.quantityBase[0].price.discountRate,
      priceUnit: data.quantityBase[0].priceUnit,
    },
    rating: {
      count: data.ratingCount,
      average: data.ratingAverage,
    },
    coupickIcon:
      "//image8.coupangcdn.com/image/badges/cou_pick/web/coupick@2x.png",
    brandName: "Apple",
    ccid: {
      ccidText: data.ccidInfo.simpleInfo.ccidText,
      iconUrl: data.ccidInfo.simpleInfo.iconUrl,
    },
    cashBack: {
      finalCashBackAmt: data.cashBackSummary.finalCashBackAmt,
      iconUrl: data.cashBackSummary.cashIconUrl,
    },
    insurance: {
      iconUrl: data.quantityBase[0].bundleOption.options[0].icon,
      name: data.quantityBase[0].bundleOption.options[0].items[0].name,
      price: data.quantityBase[0].bundleOption.options[0].items[0].price,
      description:
        data.quantityBase[0].bundleOption.options[0].items[0].description,
    },
  };

  res.json(result);
}
