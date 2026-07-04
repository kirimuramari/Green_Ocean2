import { Purchased } from "@/types/types";
import { Column } from "@/components/TableView";

type CreatePurchasedColumnsProps = {
    isDesktop:boolean
};

export function CreatePurchasedColumns({
    isDesktop,
}: CreatePurchasedColumnsProps): Column<Purchased>[] {
    
return [
    {
        id:"コード",
        key: "コード", 
        header: "コード",
         width: isDesktop ? "10%" : "15%",
    },
    {
        id:"商品名",
        key: "商品名",
         header: "商品名",
          width: isDesktop ? "22%" : "25%" ,
    },
    {
        id:"フリガナ",
       key: "フリガナ",
        header: "フリガナ",
         width: isDesktop ? "22%" : "25%",
    },
    {
        id:"セット名",
        key: "セット名",
         header: "セット名",
          width: isDesktop ? "22%" : "25%" 
    },

];
}