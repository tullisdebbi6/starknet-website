import {
  Box,
  Stack,
  BoxProps,
  Text,
  Circle,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";

type Props = {
  readonly title:
    | "Application"
    | "Internal Evaluation"
    | "Results"
    | "Onboarding"
    | "Grant Deliverables";
  readonly description?: string;
  readonly index: number;
} & BoxProps;

const images = {
  Application: "/assets/application.svg",
  "Internal Evaluation": "/assets/internal_evaluation.svg",
  Results: "/assets/results.svg",
  Onboarding: "/assets/onboarding.svg",
  "Grant Deliverables": "/assets/grant_deliverables.svg",
};

export const DisplayCard = (props: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box maxW="5xl">
      <Box
        w={{ base: "full" }}
        mx="auto"
        bg="card-bg"
        borderRadius="16px"
        rounded={"16px"}
        padding={"32px 24px"}
        border="1px"
        borderColor="#EFEFEF"
        _dark={{ borderColor: "transparent" }}
        px={{ base: "6", md: "8" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3", md: "6" }}
          align="center"
        >
          <Stack spacing="4">
            <Box
              width="80px"
              height="80px"
              borderRadius="8px"
              overflow="hidden"
              marginBottom={{ base: "16px", md: "0" }}
            >
              <Img
                width="full"
                height="full"
                src={images[props?.title]}
                title={props.title}
                objectFit="contain"
                style={{
                  filter: `invert(${colorMode === "light" ? 0 : 1})`,
                }}
              />
            </Box>
          </Stack>
          <Box flex="1">
            <Stack
              direction={{ base: "row", md: "row" }}
              pb="4px"
              paddingTop="4px"
            >
              <Circle
                size="24px"
                bg="#0C0C4F"
                _dark={{ bg: "white", color: "black" }}
                color="white"
              >
                {props.index}
              </Circle>
              <Heading
                variant="h4"
                fontSize={18}
                color="btn-primary-bg"
                _dark={{
                  color: "button-nav-fg",
                }}
              >
                {props.title}
              </Heading>
            </Stack>
            <Text>{props.description}</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
