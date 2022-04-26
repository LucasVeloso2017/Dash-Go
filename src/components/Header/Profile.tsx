import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Veloso</Text>
          <Text color="gray.300" fontSize="small">
            lucas.velloso2017@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Veloso"
        src="https://github.com/lucasVeloso2017.png"
      />
    </Flex>
  );
}
