import { Color } from "@/types/types";
import { Image, Pressable,StyleSheet,Text,View } from "react-native";
import { useState } from "react";

type Props = {
    item:Color;
    isDesktop:boolean;
};

export function ColorNameWithPreview({
    item,
    isDesktop,
}:Props) {
    const [isHovered,setISHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    const imageUrl = item.画像;

    if (!isDesktop || !imageUrl) {
        return <Text>{item.商品名}</Text>;
    }
    return (
        <View style={[
            styles.container,
            isHovered && styles.hoveredContainer,
        ]}
        >
            <Pressable
                onHoverIn={() => setISHovered(true)}
                onHoverOut={() => setISHovered(false)}
                style={styles.nameButton}
                >
                    <Text style={styles.productName}>
                        {item.商品名}
                    </Text>
                </Pressable>
                {isHovered && !imageError && (
                    <View style={styles.preview}>
                        <Image
                        source={{uri:imageUrl}}
                        resizeMode="contain"
                        onError={() => setImageError(true)}
                        style={styles.Image}
                        />
                    </View>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        position:"relative",
        alignSelf:"flex-start",
    },
    hoveredContainer:{
        zIndex:1000,
    },
    nameButton:{
        paddingVertical:2,
    },
    productName:{
        color:"#1769aa",
        textDecorationLine:"underline",
    },
    preview:{
        position:"absolute",
        top:"100%",
        left:0,
        width:220,
        height:220,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:6,
        padding:8,
        zIndex:1000,
        elevation:8,
    },
    Image:{
        width:"100%",
        height:"100%",
    },
});