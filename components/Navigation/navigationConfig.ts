import { Ionicons } from '@expo/vector-icons';

export type NavigationItem = {
    name:
    |"index"
    |"Color"
    |"SetColor"
    |"Purchased"
    |"edit"
    |"ColorForm"
    |"add-set-name";

    title:string;
    icon: keyof typeof Ionicons.glyphMap;
};

export const navigationItems:NavigationItem[] = [
    {
        name:"index",
        title:"ホーム",
        icon:"home-outline",
    },
    {
        name:"Color",
        title:"一覧",
        icon:"list",
    },
    {
        name:"SetColor",
        title:"セット品",
        icon:"albums",
    },
    {
        name:"Purchased",
        title:"購入済み",
        icon:"checkmark-done",
    },
    {
        name:"edit",
        title:"データ編集",
        icon:"create-outline",
    },
    {
        name:"ColorForm",
        title:"商品登録",
        icon:"add-circle-outline",
    },
    {
        name:"add-set-name",
        title:"セット登録",
        icon:"duplicate-outline",
    },
];