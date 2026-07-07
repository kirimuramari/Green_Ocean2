import { useEffect, useState } from 'react';
import { Dimensions, Platform, useColorScheme } from 'react-native';

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(
      Platform.OS === 'web' && Dimensions.get('window').width >= 1024,
    );

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({window}) => {
                setIsDesktop(
                    Platform.OS === "web" &&
                    window.width >= 1024
                );
            }
        );
        return () => subscription.remove();
    },[]);
    return isDesktop;
    
}

  