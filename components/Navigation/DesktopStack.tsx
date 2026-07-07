import { Stack } from 'expo-router';
import { navigationItems } from "./navigationConfig";

export function DesktopStak() {
    return (
        <Stack screenOptions={{headerShown:false}}>
            {navigationItems.map((item) => (
                <Stack.Screen
                    key={item.name}
                    name={item.name}
                    />
            ))}
        </Stack>
    );
}