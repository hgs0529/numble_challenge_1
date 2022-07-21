import axios from "axios";
import { load } from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId = req.query.productId;
  const breadcrumbList = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/breadcrumb-gnbmenu`
    )
    .then((res) => {
      const $ = load(res.data);
      const breadcrumb = $(".breadcrumb-link");
      const breadcrumbList: BreadcrumbItem[] = [];
      breadcrumb.each((i, el) => {
        breadcrumbList.push({
          name: $(el).text().replace("\n", "").trim(),
          url: $(el).attr("href")!,
        });
      });
      return breadcrumbList;
    });

  res.json(breadcrumbList);
}
