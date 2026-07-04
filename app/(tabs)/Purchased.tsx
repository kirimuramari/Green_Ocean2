import { BackButton } from "@/components/BackButton";
import { SortSelector } from "@/components/common/SortSelector";
import { ListStatus } from "@/components/ListStatus";
import { TableView } from "@/components/TableView";
import { sortItems } from "@/features/sort/sortItems";
import { SortKey } from "@/features/sort/sortTypes";
import { formStyles } from "@/theme/formStyles";
import { isDesktop } from "@/theme/isDesktop";
import {  useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreatePurchasedColumns } from "@/components/Purchased/createPurchasedColumns";
import { usePurchasedList } from "@/hooks/purchased/usePurchasedList";

export default function Purchased() {
  const [sortKey, setSortKey] = useState<SortKey>("codeAsc");
  const sortOption: SortKey[] = [
    "codeAsc",
    "codeDsc",
    "nameAsc",
    "nameDsc",
    "setNameAsc",
    "setNameDsc",
  ];

  const {
    data,loading,setData,
  } = usePurchasedList();

  const purchasedColumns = CreatePurchasedColumns({
    isDesktop
  })
  
  const sortedColors = sortItems(data, sortKey);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ListStatus
        loading={loading}
        hasData={setData.length > 0}
        emptyMessage="購入品がありません。"
      />
      <SafeAreaView style={formStyles.container}>
        <View style={formStyles.header}>
          <BackButton />

          <Text style={formStyles.title}>購入品</Text>
          <SortSelector
            value={sortKey}
            onChange={setSortKey}
            option={sortOption}
          />
        </View>
        <TableView
          data={sortedColors}
          columns={purchasedColumns}
          isDesktop={isDesktop}
          rowKey={(item) => item.番号}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
