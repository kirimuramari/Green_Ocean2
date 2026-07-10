import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { Text,StyleSheet,View } from "react-native";
import { HomeMenu } from "./HomeMenu";

type Props = {
    menu:HomeMenu;
    isDesktop:boolean;
};

export function HomeButton({menu,isDesktop}:Props) {
    return (
        <Link href={menu.href}
            style={[
                styles.button,
                isDesktop && styles.buttonDesktop,
            ]}
            >
<View style={styles.content}>
        <Ionicons
            name={menu.icon}
            size={isDesktop ? 48 : 32}
            color="#f7f9ff"
        />
        <Text style={styles.buttonText}>
            {menu.title}
            </Text>

</View>
        </Link>
    );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginLeft:'auto',
        marginRight:'auto',
    },
button: {
    backgroundColor: '#a2d2ff',
    width: 102,
    height: 102,
    borderRadius: 12,
    margin: 3.3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  buttonDesktop: {
    width: 150,
    height: 150,
  },
  buttonText: {
    color: '#434656',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
    width:'100%',
  },
});