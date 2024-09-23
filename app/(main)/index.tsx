import { getUsers } from "@/api/methods";
import { QueryKeys } from "@/api/utils";
import { HomeHeaderWithQuery, UserTile } from "@/components/home";
import { ScreenContainer, Spacer, ThemedView } from "@/components/shared";
import { callErrorAlert } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";

const renderItem = ({ item }: ListRenderItemInfo<User>) => (
  <UserTile
    {...item}
    onPress={() =>
      router.push({
        pathname: `/chat`,
        params: item,
      })
    }
  />
);

const renderItemSeparator = () => <Spacer vertical="l" />;

const renderHomeHeader = () => (
  <>
    <HomeHeaderWithQuery />
    <Spacer vertical="l" />
  </>
);

const keyExtractor = (item: User) => `${item.name}-${item.profileURL}`;

export default function HomeScreen() {
  const { data, isLoading, error, refetch } = useQuery<User[], CustomError>({
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
    callErrorAlert(error, refetch);
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
