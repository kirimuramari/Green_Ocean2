import { ListStatus } from "@/components/ListStatus";
import { TableView } from "@/components/TableView";
import { sortItems } from "@/features/sort/sortItems";
import { SortKey } from "@/features/sort/sortTypes";
import { useSetColorList } from "@/hooks/setColor/useSetColorList";
import { formStyles } from "@/theme/formStyles";
import { isDesktop } from "@/theme/isDesktop";
import { createSetColorColumns } from "@/components/setColor/createSetColorColumns";
import {  useState } from "react";
import { ScrollView, } from "react-native";
import { ListHeader } from "@/components/ListHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetColor() {
  const [sortKey, setSortKey] = useState<SortKey>("numberAsc");
  const sortOptions: SortKey[] = [
    "setNameAsc",
    "setNameDsc",
    "PriceAsc",
    "priceDsc",
    "numberAsc",
    "numberDsc",
  ];


  const setColumns = createSetColorColumns({
    isDesktop
  })

  const {
    data,
    loading,
    setData,
  } = useSetColorList();
 

  const sortedColors = sortItems(data, sortKey);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ListStatus
        loading={loading}
        hasData={setData.length > 0}
        emptyMessage="セット品が登録されていません"
      />
      <SafeAreaView style={formStyles.container}>
        <ListHeader
          title="セット品一覧"
          sortKey={sortKey}
          onSortChange={setSortKey}
          sortOptions={sortOptions}
          />
        <TableView
          data={sortedColors}
          columns={setColumns}
          isDesktop={isDesktop}
          rowKey={(item) => item.番号}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
