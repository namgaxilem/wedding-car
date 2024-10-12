import { StrapiImage } from "./StrapiImage";

export interface Car {
  id: number;
  documentId: string;
  thong_tin_xe_common: {
    id: number;
    ten_xe: string;
    gia_thue_theo_gio: string;
    thong_tin_ngan_gon?: string;
    thong_tin_chi_tiet: string;
    so_cho_ngoi: 4;
    hinh_xe?: StrapiImage[];
    hinh_xe_dai_dien?: StrapiImage;
    tien_ich_xes?: TienIchXe[];
  };
}

export interface TienIchXe {
  createdAt: Date;
  updatedAt: Date;
  documentId: string;
  id: number;
  locale: string;
  publishedAt: Date;
  ten_tien_ich?: string;
}
