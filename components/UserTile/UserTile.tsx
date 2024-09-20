import { CircleAvatar } from "../CircleAvatar";
import { Spacer } from "../Spacer";
import { ThemedTouchable } from "../ThemedTouchable";
import { ThemedText } from "../ThemedText";

export function UserTile({ name, profileURL }: User) {
  return (
    <ThemedTouchable flexDirection="row" paddingLeft="m">
      <CircleAvatar avatarURL={profileURL} />
      <Spacer horizontal="s" />
      <ThemedText variant="p1">{name}</ThemedText>
    </ThemedTouchable>
  );
}
