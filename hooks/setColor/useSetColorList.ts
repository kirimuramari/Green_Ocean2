import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { SetColorItem } from "@/types/types";

export function  useSetColorList() {
    const [data, setData] = useState<SetColorItem[]>([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
    const fetchData = useCallback(async () => {
        setLoading(false)
        const { data, error } = await supabase
            .from("GreenOcean_SetColor")
            .select("*");
                
           if (error) {
        setError(error.message);
    } else {
        setData(data ?? []);
    }
                setLoading(false);
            }, []);
            
            useEffect(() => {
                fetchData();
            },[fetchData]);

    return {
        data,
        loading,
        error,
        setData,
        fetchData
    };
}