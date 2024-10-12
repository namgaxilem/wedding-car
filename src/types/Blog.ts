import { StrapiImage } from "./StrapiImage";

export interface Blog {
  id: string;
  documentId: string;
  tieu_de: string;
  hinh_dai_dien: StrapiImage;
  noi_dung_chinh: string;
  mo_ta_ngan_gon: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
