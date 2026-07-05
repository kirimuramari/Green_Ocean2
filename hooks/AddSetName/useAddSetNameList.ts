import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { SetColorItem } from "@/types/types";
import { SnackbarType } from "@/theme/snackbarStyles";

export function  useAddSetNameList() {
    const [setName, setSetName] = useState("");
    const [furigana, setFurigana] = useState("");
    const [price, setPrice] = useState<string>("");
    const [lastNumber, setLastNumber] = useState<number>(0);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarType, setSnackbarType] = useState<SnackbarType>("success");

    const showSnackbar = useCallback(
        (msg: string, type: SnackbarType = "success") => {
    setSnackbarMessage(msg);
    setSnackbarType(type);
    setSnackbarVisible(true);
        },
        []
);

  useEffect(() => {
    const fetchLastNumber = async () => {
      const { data, error } = await supabase
        .from("GreenOcean_SetColor")
        .select("番号")

        .order("番号", { ascending: false })
        .limit(1);

      if (error) {
        return;
      }
      const last: number =
        (data?.[0] as unknown as SetColorItem)?.["番号"] ?? 0;
      setLastNumber(last);
    };
    fetchLastNumber();
  }, []);

const handleRegister =  useCallback(async () => {
    if (!setName.trim() || !furigana.trim()) {
      showSnackbar("セット名とフリガナは必須項目です", "error");
      return;
    }
    const newItem: Omit<SetColorItem, "番号" | "コード"> = {
      セット名: setName.trim(),
      フリガナ: furigana.trim(),
      値段: price.trim() ? Number(price) : 0,
    };
const { error } = await supabase
      .from("GreenOcean_SetColor")
      .insert(newItem);
    if (error) {
      showSnackbar("セット名の登録に失敗しました", "error");
      return;
    }
      showSnackbar("セット名が登録されました", "success");
      setSetName("");
      setFurigana("");
      setPrice("");
    }, [setName,furigana,price,showSnackbar]);

    return {
        setName,
        setSetName,
        furigana,
        setFurigana,
        price,
        setPrice,
        lastNumber,

        snackbarVisible,
        snackbarMessage,
        snackbarType,
        setSnackbarVisible,

        handleRegister,
    };
}