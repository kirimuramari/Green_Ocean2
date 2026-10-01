//DB完成型のデータ
export interface Color {
  番号: number;
  コード: number;
  商品名: string;
  フリガナ: string;
  値段: number;
  セット名: string;
  購入済み: boolean;
  種類:string;
  画像:string | null;
}
export interface SetColorItem {
  番号: number;
  セット名: string;
  フリガナ: string;
  値段: number;
}

export interface Purchased {
      番号: number;
      コード: number;
      商品名: string;
      フリガナ: string;
      セット名: string;
      種類:string;
}

//DB未完成型のデータ
export interface Colorform {
  番号: number | null,
  コード: number | "";
  商品名: string;
  フリガナ: string;
  値段: number | null;
  セット名: string;
  購入済み: boolean;
}
