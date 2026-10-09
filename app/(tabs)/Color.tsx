import ColorSearchPanel from "@/components/color/ColorSearchPanel";
import { useColorList } from "@/hooks/color/useColorList";
import { useColorSearch } from "@/hooks/color/useColorSearch";
import { BackButton } from "@/components/BackButton";
import { ListStatus } from "@/components/ListStatus";
import { TableView, } from "@/components/TableView";
import { SortKey } from "@/features/sort/sortTypes";
import {  formStyles } from "@/theme/formStyles";
import { useIsDesktop } from "@/theme/useIsDesktop";
import {  useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colorTypes } from "@/types/colorTypes";
import { createColorColumns } from "@/components/color/ColorColumns";

export default function ColorScreen() {
  const [sortKey, setSortKey] = useState<SortKey>("numberAsc");

  
  const {
          searchKeywordInput,
          selectedSetName,
          selectedType,
          searchOpen,
          searchKeyword,
          searchSetName,
          searchType,
          handleKeywordChange,
          handleSetNameChange,
          handleTypeChange,
          applySearch,
          toggleSearch,
    } = useColorSearch();
  const {
          colors,
        loading,
        error,
        page,
        hasMore,
        setNameList,
        nextPage,
        prevPage,

    
  } = useColorList({
    searchKeyword,
    searchSetName,
    searchType,
    sortKey,
  });




  //ＰＣかスマホ判定
  const isDesktop = useIsDesktop();

  const handleSearch = () => {
    applySearch();    
  };


  const columns = createColorColumns({
    isDesktop,

  })



  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          { width: "100%", backgroundColor: "#fff" },
          isDesktop && { flexDirection: "row", gap: 20 },
        ]}
      >
        <View
          style={[
            { marginLeft: 20, backgroundColor: "#fff" },
            !isDesktop && { marginBottom: 10 },
          ]}
        >
          
<View style={formStyles.header}>
       <BackButton />
       <Text style={[formStyles.title]}>商品一覧表示</Text>
     </View>
     <ColorSearchPanel
        isDesktop={isDesktop}
        searchOpen={searchOpen}
        onToggleSearch={toggleSearch}
        search={{
          keyword: searchKeywordInput,
          selectedSetName,
          setNameList,
          selectedType,
          typeList:[...colorTypes],
        }}
        actions={{
          onKeywordChange: handleKeywordChange,
          onSetNameChange: handleSetNameChange,
          onSearch: handleSearch,
          onTypeChange:handleTypeChange,
        }}
        sort={{
          value: sortKey,
          onChange: setSortKey,
        }}
     />
     </View>

        {/* テーブル */}
        <View style={{ flex: 2 }}>
            <TableView
              data={colors}
              columns={columns}
              isDesktop={isDesktop}
              rowKey={(item) => item.コード}
            />
        {/* ロード中の表示 */}
        <ListStatus
          loading={loading}
          error={error}
          hasData={colors.length > 0}
          emptyMessage="該当する商品がありません"
        />

          <View style={styles.pagination}>
            <Button title="前へ" onPress={prevPage} disabled={page === 0} />
            <Text>ページ {page + 1}</Text>
            <Button title="次へ" onPress={nextPage} disabled={!hasMore} />
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,

    marginTop: 20,

    marginBottom: 10,
  },

  label: { marginBottom: 10 },

  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  // PC で左右の余白を整える場合
  sideContainer: {
    flex: 1,
    paddingRight: 20,
  },
});
