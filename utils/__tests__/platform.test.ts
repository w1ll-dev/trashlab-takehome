// callErrorAlert.test.ts
import { Alert } from "react-native";
import { callErrorAlert } from "../platform";

jest.mock("react-native", () => ({
  Alert: {
    alert: jest.fn(),
  },
  Platform: {
    OS: "ios", // Mocking to simulate iOS platform
  },
}));

describe("callErrorAlert", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
  });

  test("should call Alert.alert with correct parameters", () => {
    const customError: CustomError = {
      title: "Error Title",
      message: "This is an error message.",
    };

    callErrorAlert(customError);

    expect(Alert.alert).toHaveBeenCalledWith(
      "❌ Error Title",
      "This is an error message.",
      [{ text: "Try again", onPress: undefined }],
    );
  });

  test('should call onPress function when "Try again" is pressed', () => {
    const onPressMock = jest.fn();
    const customError: CustomError = {
      title: "Error Title",
      message: "This is an error message.",
    };

    callErrorAlert(customError, onPressMock);

    expect(Alert.alert).toHaveBeenCalledWith(
      "❌ Error Title",
      "This is an error message.",
      [{ text: "Try again", onPress: onPressMock }],
    );

    // Simulate the "Try again" button press
    const tryAgainButton = (Alert.alert as jest.Mock).mock.calls[0][2][0];
    tryAgainButton.onPress();

    expect(onPressMock).toHaveBeenCalled();
  });
});
