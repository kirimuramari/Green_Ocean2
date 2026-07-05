import { Snackbar } from "react-native-paper";
import { BackButton } from "@/components/BackButton";
import {  getSnackbarStyle } from "@/theme/snackbarStyles";
import { formStyles } from "@/theme/formStyles";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAddSetNameList } from "@/hooks/AddSetName/useAddSetNameList";

const AddSetName = () => {
 const {
  setName,
  setSetName,
  furigana,
        setFurigana,
        price,
        setPrice,

        snackbarVisible,
        snackbarMessage,
        snackbarType,
        setSnackbarVisible,

        handleRegister,
 } = useAddSetNameList();
  

  return (
    <View style={(styles.container, formStyles.container)}>
      <View style={formStyles.subContainer}>
        <View style={formStyles.header}>
          <BackButton />
          <Text style={formStyles.title}>セット名の追加</Text>
        </View>
        <Text style={styles.label}>セット名</Text>
        <TextInput
          style={formStyles.input}
          value={setName}
          onChangeText={setSetName}
          placeholder="セット名を入力"
          autoCorrect={false}
          autoCapitalize="none"
          inputMode="text"
          returnKeyType="done"
          onEndEditing={handleRegister}
        />
        <Text style={styles.label}>フリガナ</Text>
        <TextInput
          style={formStyles.input}
          value={furigana}
          onChangeText={setFurigana}
          placeholder="フリガナを入力"
          autoCorrect={false}
          autoCapitalize="none"
          inputMode="text"
          returnKeyType="done"
          onEndEditing={handleRegister}
        />
        <Text style={styles.label}>値段（任意）</Text>
        <TextInput
          style={formStyles.input}
          value={price ?? ""}
          onChangeText={setPrice}
          placeholder="値段を入力（空白でもOK）"
          onEndEditing={handleRegister}
          onSubmitEditing={handleRegister}
          returnKeyType="default"
        />
        <View style={formStyles.buttonRow}>
          <TouchableOpacity onPress={handleRegister} style={formStyles.button}>
            <Text style={formStyles.buttonText}>追加</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={[formStyles.cancelButton, formStyles.halfButton]}
          >
            <Text style={formStyles.cancelButtonText}>キャンセル</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={getSnackbarStyle(snackbarType)}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};
export default AddSetName;
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  label: {
    color: "#434656",

    fontSize: 16,
    marginTop: 12,
  },
  input: {
    color: "#434656",

    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    marginTop: 4,
  },
});
