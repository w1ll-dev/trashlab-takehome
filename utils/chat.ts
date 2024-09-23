import { format, isToday } from "date-fns";

/**
 * This method will return the chat ID sorting two user ID. This way we will get the
 * same chat id if first user or second user try to access our chat
 */
function getChatID(firstUserID: string, secondUserID: string) {
  const [prefixUserID, suffixUserID] = [firstUserID, secondUserID].sort();
  return `${prefixUserID}-${suffixUserID}`;
}

const getMessageDate = (messageTimestampMilliSeconds?: number) => {
  if (!messageTimestampMilliSeconds) return "";

  const messageDate = new Date(messageTimestampMilliSeconds);
  const formatString = isToday(messageDate) ? "hh:mm a" : "MM/dd/yyyy hh:mm a";

  return format(messageDate, formatString);
};

const sanitizeMessage = (message: string) => {
  // Remove leading and trailing whitespace
  message = message.trim();

  // Remove HTML tags
  message = message.replace(/<[^>]*>/g, "");

  // Replace unwanted characters (keeping alphanumeric and some punctuation)
  message = message.replace(/[^a-zA-Z0-9\s.,!?'"()-]/g, "");

  // Limit message length to 500 characters
  if (message.length > 500) {
    message = message.substring(0, 500);
  }

  return message;
};

export { getChatID, getMessageDate, sanitizeMessage };
