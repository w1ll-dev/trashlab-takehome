import { Alert, Platform } from "react-native";

const IS_IOS = Platform.OS === "ios";

const callErrorAlert = (customError: CustomError, onPress?: () => void) => {
  Alert.alert(`❌ ${customError.title}`, customError.message, [
    { text: "Try again", onPress },
  ]);
};

export { IS_IOS, callErrorAlert };
