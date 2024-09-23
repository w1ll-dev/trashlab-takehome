import { CURRENT_USER_ID } from "@/api/utils";
import { Spacer } from "@/components/shared";
import { Message } from "@/types/message";
import { FlatList, ListRenderItemInfo } from "react-native";
import { MessageItem } from "./MessageItem";

type MessagesListProps = {
  messages: Message[];
};

const renderItem = ({ item }: ListRenderItemInfo<Message>) => (
  <MessageItem
    createdAt={item.createdAt}
    profileURL={item.profileURL}
    text={item.text}
    isFromCurrentUser={item.userID === CURRENT_USER_ID}
  />
);

const renderItemSeparator = () => <Spacer vertical="s" />;

type MessagesListRef = {
  scrollToEnd: FlatList["scrollToEnd"];
};

export const MessagesList = ({ messages }: MessagesListProps) => {
  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      inverted={true}
    />
  );
};

export type { MessagesListRef };
