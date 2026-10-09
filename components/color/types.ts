import { SortKey } from "@/features/sort/sortTypes";

export type ColorSearchPanelProps = {
    isDesktop:boolean;
    searchOpen:boolean;
    onToggleSearch:() => void;

    search: {
        keyword:string;
        selectedSetName:string;
        setNameList:string[];
        selectedType: string;
        typeList: string[];
    };

    actions:{
        onKeywordChange:(text:string) => void;
        onSetNameChange:(value:string) => void;
        onTypeChange: (value: string) => void;
        onSearch: () => void;
    };
    sort:{
        value: SortKey;
        onChange: (key: SortKey) => void;
    };
};