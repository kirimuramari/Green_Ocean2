import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { HomeSection } from "@/components/home/HomeSection";
import { editMenus,viewMenus } from "@/components/home/HomeMenu";

export default function Home() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeSection
        title='閲覧'
        menus={viewMenus}
        isDesktop={isDesktop}
        />
        <HomeSection
        title='編集・登録'
        menus={editMenus}
        isDesktop={isDesktop}
        />
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',

    backgroundColor: 'white',
  },
  
});
