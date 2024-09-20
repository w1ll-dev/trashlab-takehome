import { Image } from "expo-image";
import { blurhash, CIRCLE_AVATAR_SIZE } from "./utis";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from "react-native";

type CircleAvatarProps = {
  avatarURL?: string;
};

export function CircleAvatar({ avatarURL }: CircleAvatarProps) {
  return (
    <ThemedView
      borderRadius={CIRCLE_AVATAR_SIZE}
      height={CIRCLE_AVATAR_SIZE}
      width={CIRCLE_AVATAR_SIZE}
    >
      <Image
        style={styles.image}
        source={avatarURL}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: CIRCLE_AVATAR_SIZE,
  },
});
