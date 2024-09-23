import { Image } from "expo-image";
import {
  blurhash,
  CIRCLE_AVATAR_SIZE,
  circleAvatarPossibleSizes,
  CircleAvatarSize,
} from "./utis";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/shared";

type CircleAvatarProps = {
  avatarURL?: string;
  size?: CircleAvatarSize;
};

export function CircleAvatar({ avatarURL, size = "small" }: CircleAvatarProps) {
  return (
    <ThemedView
      borderRadius={circleAvatarPossibleSizes[size]}
      height={circleAvatarPossibleSizes[size]}
      width={circleAvatarPossibleSizes[size]}
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
