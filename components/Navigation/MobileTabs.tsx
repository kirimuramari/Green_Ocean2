import { Colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { navigationItems } from "./navigationConfig";
import {  useColorScheme } from 'react-native';

export function MobileTabs() {
      const scheme = useColorScheme();
  const theme = scheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: theme.text,
        headerShown:false,
        headerTintColor:theme.text,
        headerStyle:{
            backgroundColor:theme.background,
        },
        tabBarStyle:{
            backgroundColor:theme.background,
        },
    }}
    >
        {navigationItems.map((item)=> (
            <Tabs.Screen
                key={item.name}
                name={item.name}
                options={{
                    title:item.title,
                    tabBarIcon:({color,size}) => (
                        <Ionicons
                        name={item.icon}
                        color={color}
                        size={size}
                        />
                    ),
                }}
                />
        ))}
    </Tabs>
  );
}
