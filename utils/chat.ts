function getChatID(currentUserID: string, userToChatID: string) {
  return `${currentUserID}-${userToChatID}`;
}

export { getChatID };
