import { Spacer, ThemedText, ThemedTouchable } from "@/components/shared";
import { CircleAvatar } from "../CircleAvatar";

type UserTileProps = User & {
  onPress: (userID: User["userID"]) => void;
};

export function UserTile({ name, profileURL, onPress, userID }: UserTileProps) {
  return (
    <ThemedTouchable
      flexDirection="row"
      paddingLeft="m"
      onPress={() => onPress(userID)}
    >
      <CircleAvatar avatarURL={profileURL} />
      <Spacer horizontal="s" />
      <ThemedText variant="p1">{name}</ThemedText>
    </ThemedTouchable>
  );
}
