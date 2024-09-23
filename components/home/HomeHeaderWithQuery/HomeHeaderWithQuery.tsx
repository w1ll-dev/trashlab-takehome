import { getUserInfo } from "@/api/methods";
import { QueryKeys } from "@/api/utils";
import { ThemedText, ThemedView } from "@/components/shared";
import { useQuery } from "@tanstack/react-query";
import { CircleAvatar } from "../CircleAvatar";
import { texts } from "./texts";

function HomeHeaderWithQuery() {
  const { data } = useQuery({
    queryKey: [QueryKeys.getUserInfo],
    queryFn: getUserInfo,
  });

  return (
    <ThemedView
      flexDirection="row"
      justifyContent="space-between"
      marginHorizontal="m"
    >
      <ThemedText variant="h1" marginBottom="l">
        {texts.trashLab}
      </ThemedText>
      <CircleAvatar avatarURL={data?.profileURL} size="medium" />
    </ThemedView>
  );
}

export { HomeHeaderWithQuery };
