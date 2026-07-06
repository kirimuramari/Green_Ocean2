import { Ionicons } from '@expo/vector-icons';

export type HomeMenu = {
    title: string;
    href:
    |"/Color"
    |"/SetColor"
    |"/Purchased"
    |"/edit"
    |"/ColorForm"
    |"/add-set-name";
    icon: keyof typeof Ionicons.glyphMap;
};

export const viewMenus:HomeMenu[] = [
    {
        title:"一覧画面",
        href:"/Color",
        icon:"list",
    },
    {
        title:"セット品",
        href:"/SetColor",
        icon:"albums",
    },
    {
        title:"購入済み",
        href:"/Purchased",
        icon:"checkmark-done",
    },
];

export const editMenus: HomeMenu[] = [
    {
        title:"データ編集",
        href:"/edit",
        icon:"create-outline",
    },
    {
        title:"商品登録",
        href:"/ColorForm",
        icon:"add-circle-outline",
    },
     {
        title:"セット登録",
        href:"/add-set-name",
        icon:"duplicate-outline",
    },
    
];