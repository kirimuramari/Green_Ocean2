import ColorSearchPanel from "@/components/color/ColorSearchPanel";
import  {useColorList}  from "@/hooks/color/useColorList";
import { useColorSearch } from "@/hooks/color/useColorSearch";
import { BackButton } from "@/components/BackButton";
import { ListStatus } from "@/components/ListStatus";
import { TableView, } from "@/components/TableView";
import { SortKey } from "@/features/sort/sortTypes";
import {  formStyles } from "@/theme/formStyles";
import { colorTypes } from "@/types/colorTypes";
import {  useEffect,useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import  {createColorColumns}  from "@/components/color/ColorColumns";
import { isDesktop } from "@/theme/isDesktop";

type PreviewInfo = {
  imageUrl: string;
  x:number;
  y:number;
  width:number;
  height:number;
};
export default function ColorScreen() {
  const [sortKey, setSortKey] = useState<SortKey>("numberAsc");
const [preview, setPreview] = useState<PreviewInfo | null>(null);
const [previewPosition, setPreviewPosition] = useState({
  left:0,
  top:0,
});

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


useEffect(() => {
  if (!preview) return;
  
  const previewWidth = 220;
  const previewHeight = 220;
  const gap = 8;

  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1024;

  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 768;

    let left = preview.x;
    let top = preview.y + preview.height + gap;

    if (left + previewWidth > viewportWidth - gap) {
      left = viewportWidth - previewWidth - gap;
    }
    if (top + previewHeight > viewportHeight - gap) {
      top = preview.y - previewHeight - gap;
    }
    top = Math.max(gap, top);
    left = Math.max(gap, left);

    setPreviewPosition({ left, top});
}, [preview]);



  const columns = createColorColumns({
    isDesktop,
    onPreviewShow: setPreview,
    onPreviewHide: () => setPreview(null),
  });

 const handleSearch = () => {
    applySearch();    
  };




  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      scrollEventThrottle={16}
      >
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

    {isDesktop && preview && (
      <View
      pointerEvents="none"
      style={[
        styles.preview,
        {
          left:previewPosition.left,
          top:previewPosition.top,
        },
      ]}
      >
        <Image
        source={{ uri:preview.imageUrl}}
        resizeMode="contain"
        style={styles.previewImage}
        />
        </View>
    )}
    </View>

  );
}

const styles = StyleSheet.create({

  screen:{
    flex:1,
    position:"relative",
    backgroundColor:"#fff",
  },
  preview:{
    position:"absolute",
    width:220,
    height:220,
    padding:8,
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:6,
    zIndex:10000,
    elevation:8,
  },
  previewImage: {
    width:"100%",
    height:"100%",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

});
