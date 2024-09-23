import { Dimensions } from "react-native";

const BORDER_RADIUS = 10;

const MESSAGE_CONTAINER_MAX_WIDTH = Dimensions.get("window").width * 0.8;

const getMessageBorderRadius = (isMessageFromCurrentUser: boolean) => {
  return {
    top: BORDER_RADIUS,
    bottomLeft: isMessageFromCurrentUser ? BORDER_RADIUS : undefined,
    bottomRight: isMessageFromCurrentUser ? undefined : BORDER_RADIUS,
  };
};

export { BORDER_RADIUS, getMessageBorderRadius, MESSAGE_CONTAINER_MAX_WIDTH };
