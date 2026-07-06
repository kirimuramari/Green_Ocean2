import {
  StyleSheet, 
  Text,
  View,
} from 'react-native';
import { HomeMenu } from "./HomeMenu";
import { HomeButton } from "./HomeButton";

type Props = {
    title: string;
    menus: HomeMenu[];
    isDesktop:boolean;
};

export function HomeSection({
    title,
    menus,
    isDesktop,
}:Props) {
    return (
        <>
        <Text style={styles.title}>{title}</Text>
        <View
            style={[
                styles.grid,
                isDesktop && styles.gridDesktop,
            ]}
            >
                {menus.map((menu) => (
                    <HomeButton
                        key={menu.href}
                        menu={menu}
                        isDesktop={isDesktop}
                        />
                ))}
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    title: {
    fontSize: 20,
    color: '#747575',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridDesktop: {
    justifyContent: 'flex-start',
    gap: 20,
    maxWidth: 900,
  },
});