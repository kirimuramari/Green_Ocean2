import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Purchased} from "@/types/types";

export function  usePurchasedList() {
    const [data, setData] = useState<Purchased[]>([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
    const fetchData = useCallback(async () => {
        setLoading(false)
        const { data, error } = await supabase
            .from("GreenOcean_Color")
            .select("*")
            .eq("購入済み", true);
                
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