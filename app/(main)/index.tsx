import { getUsers } from "@/api/methods";
import { CURRENT_USER_ID, QueryKeys } from "@/api/utils";
import { HomeHeaderWithQuery, UserTile } from "@/components/home";
import {
  ScreenContainer,
  Spacer,
  ThemedText,
  ThemedView,
} from "@/components/shared";
import { getChatID } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";

const renderItem = ({ item }: ListRenderItemInfo<User>) => {
  const chatID = getChatID(CURRENT_USER_ID, item.userID);

  return (
    <UserTile {...item} onPress={() => router.navigate(`/(main)/${chatID}`)} />
  );
};

const renderItemSeparator = () => <Spacer vertical="l" />;

const renderHomeHeader = () => (
  <>
    <HomeHeaderWithQuery />
    <Spacer vertical="l" />
  </>
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
      <ThemedView flex={1}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparator}
          ListHeaderComponent={renderHomeHeader}
        />
      </ThemedView>
    </ScreenContainer>
  );
}
