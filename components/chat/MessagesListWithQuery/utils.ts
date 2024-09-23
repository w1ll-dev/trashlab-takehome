import { Dimensions } from "react-native";

const BORDER_RADIUS = 10;

const MESSAGE_CONTAINER_MAX_WIDTH = Dimensions.get("window").width * 0.8;

const getMessageBorderRadius = (isMessageFromCurrentUser: boolean) => {
  return {
    top: BORDER_RADIUS,
    bottomLeft: isMessageFromCurrentUser ? undefined : BORDER_RADIUS,
    bottomRight: isMessageFromCurrentUser ? BORDER_RADIUS : undefined,
  };
};

export { BORDER_RADIUS, getMessageBorderRadius, MESSAGE_CONTAINER_MAX_WIDTH };
