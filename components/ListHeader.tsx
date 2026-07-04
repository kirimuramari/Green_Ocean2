import { Text, View } from "react-native";
import { BackButton } from "@/components/BackButton";
import { SortSelector } from "@/components/common/SortSelector";
import { SortKey } from "@/features/sort/sortTypes";
import { formStyles } from "@/theme/formStyles";

type ListHeaderProps = {
    title:string;
    sortKey?:SortKey;
    onSortChange:(value:SortKey) => void;
    sortOptions:SortKey[];
};

export function ListHeader({
    title,
    sortKey,
    onSortChange,
    sortOptions,
}:ListHeaderProps) {
    return (
        <View style={formStyles.header}>
            <BackButton />
            <Text style={formStyles.title}>
                {title}
            </Text>
        {sortKey && onSortChange && sortOptions && (
            <SortSelector
                value={sortKey}
                onChange={onSortChange}
                option={sortOptions}
                />

        )}
        </View>
    );
}