import { Box, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => (
  <Box height={20}>
    <List>
      <SkeletonText></SkeletonText>
    </List>
  </Box>
);

export default GenreSkeleton;
