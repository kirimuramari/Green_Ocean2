import { Text, } from "react-native";
import { SetColorItem } from "@/types/types";
import { Column } from "@/components/TableView";

type CreateSetColorColumnsProps = {
    isDesktop:boolean
};

export function createSetColorColumns({
    isDesktop,
}: CreateSetColorColumnsProps): Column<SetColorItem>[] {
    
return [
    {
        id:"番号",
        key:"番号",
        header:"番号",
        width: isDesktop ? "8%" : "12%",
    },
    {
        id:"セット名",
        key:"セット名",
        header:"セット名",
        width: isDesktop ? "36%" : "40%",
    },
    {
        id:"フリガナ",
        key:"フリガナ",
        header:"フリガナ",
        width: isDesktop ? "26%" : "28%",
    },
    {
        id:"値段",
        key:"値段",
        header:"値段",
        width: isDesktop ? "20%" : "20%",
        render: (item) => (
            <Text style={{ textAlign: "left" }}>
                ¥{item.値段}
            </Text>
        ),
    },

];
}