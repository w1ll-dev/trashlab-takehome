const errorGettingUsers: CustomError = {
  title: "Users",
  message: "We have an error trying to get your chats.",
};

const errorGettingUserInfo: CustomError = {
  title: "User info",
  message: "We have an error trying to get your info.",
};

const errorGettingLastMessage: CustomError = {
  title: "Last Message",
  message: "We have an error trying to get your last message.",
};

const errorGettingMessages = (userName: User["name"]): CustomError => ({
  title: "Messages",
  message: `We have an error trying to get your messages with ${userName}.`,
});

const errorSendingMessage = (userName: User["name"]): CustomError => ({
  title: "Messages",
  message: `We have an error trying to send you message to ${userName}.`,
});

const errorGettingData: CustomError = {
  title: "Database",
  message: `We have an error trying to load your data.`,
};

export {
  errorGettingMessages,
  errorGettingLastMessage,
  errorGettingUserInfo,
  errorGettingUsers,
  errorSendingMessage,
  errorGettingData,
};
