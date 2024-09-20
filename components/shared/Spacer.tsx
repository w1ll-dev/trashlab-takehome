import { Theme } from "@/styles/theme";
import { useTheme } from "@shopify/restyle";
import React, { useMemo } from "react";
import { ThemedView } from "./ThemedView";

type SpacerProps = {
  vertical?: keyof Theme["spacing"];
  horizontal?: keyof Theme["spacing"];
};

const Spacer = ({ horizontal, vertical }: SpacerProps) => {
  const theme = useTheme<Theme>();

  const width = useMemo(() => {
    if (!horizontal) return undefined;

    return theme.spacing[horizontal];
  }, [horizontal, theme.spacing]);

  const height = useMemo(() => {
    if (!vertical) return undefined;

    return theme.spacing[vertical];
  }, [theme.spacing, vertical]);

  return <ThemedView width={width} height={height} />;
};

export { Spacer };
