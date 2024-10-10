export interface Car {
  id: number;
  thong_tin_xe_common: {
    id: number;
    ten_xe: string;
    gia_thue_theo_gio: string;
    thong_tin_chi_tiet: string;
    so_cho_ngoi: 4;
    hinh_xe_dai_dien: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  };
}
