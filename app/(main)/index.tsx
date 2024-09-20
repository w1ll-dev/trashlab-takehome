import { getUsers } from "@/api/methods";
import { QueryKeys } from "@/api/utils";
import { UserTile } from "@/components/home";
import {
  ScreenContainer,
  Spacer,
  ThemedText,
  ThemedView,
} from "@/components/shared";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";

const renderItem = ({ item }: ListRenderItemInfo<User>) => (
  <UserTile {...item} onPress={() => console.log(item.userID)} />
);

const renderHeader = ({ item }: ListRenderItemInfo<User>) => (
  <ThemedText variant="h3" marginHorizontal="m" marginBottom="l">
    TrashLab
  </ThemedText>
);

const renderItemSeparator = () => <Spacer vertical="l" />;

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
      <ThemedView flex={1}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListHeaderComponent={renderHeader}
        />
      </ThemedView>
    </ScreenContainer>
  );
}
