import { Color } from "@/types/types";
import { Pressable,StyleSheet,Text,View } from "react-native";
import { useRef} from "react";

type PreviewInfo = {
    imageUrl: string;
    x: number;
    y: number;
    width: number;
    height: number;
};

type Props = {
    item:Color;
    isDesktop:boolean;
    onPreviewShow:(info:PreviewInfo) => void;
    onPreviewHide: () => void;
};

export function ColorNameWithPreview({
    item,
    isDesktop,
    onPreviewShow,
    onPreviewHide,
}:Props) {
    const nameRef = useRef<View>(null);
    const imageUrl = item.画像;


    const handleHoverIn = () => {
        if (!imageUrl) return;
        nameRef.current?.measureInWindow((x, y, width, height) => {
            onPreviewShow({
                imageUrl,
                x,
                y,
                width,
                height,
            });
        });
    };

    // const handleHoverOut = () => {
     
    //     setIsHovered(false);
    // };


    if (!isDesktop || !imageUrl) {
        return <Text>{item.商品名}</Text>;
    }
    return (
        <View ref={nameRef} style={styles.container}
        >
            <Pressable
            onHoverIn={handleHoverIn}
            onHoverOut={onPreviewHide}
                style={styles.nameButton}
                >
                    <Text style={styles.productName}>
                        {item.商品名}
                    </Text>
                    </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
  
        alignSelf: "flex-start",
    },

    nameButton:{
        paddingVertical:2,
    },
    productName:{
        color:"#1769aa",
        textDecorationLine:"underline",
    },
});