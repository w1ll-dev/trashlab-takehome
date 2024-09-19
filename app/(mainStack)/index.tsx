import { getUsers } from "@/api/methods";
import { QueryKeys } from "@/api/utils";
import { ScreenContainer } from "@/components/ScreenContainer";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";

const renderItem = ({ item }: ListRenderItemInfo<User>) => (
  <ThemedText>{item.name}</ThemedText>
);

const keyExtractor = (item: User) => `${item.name}-${item.profileURL}`;

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.getUsers],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <ThemedView flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView flex={1} justifyContent="center" alignItems="center">
        <ThemedText>{error.message}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScreenContainer>
      <ThemedView flex={1} justifyContent="center" alignItems="center">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </ThemedView>
    </ScreenContainer>
  );
}
