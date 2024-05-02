import { Box, Stack, BoxProps, Img, Text, Circle } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";

type Props = {
  readonly title:
    | "Application"
    | "Internal Evaluation"
    | "Results"
    | "Onboarding"
    | "Grant Deliverables";
  readonly description?: string;
  readonly image?: string;
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
  const cloudflareImage = `https://www.starknet.io/cdn-cgi/image/width=80px,height=auto,format=auto${props.image}`;
  const isProd = import.meta.env.VITE_ALGOLIA_INDEX === "production";

  return (
    <Box maxW="5xl">
      <Box sx={{ textDecoration: "none!important", cursor: "pointer" }}>
        <CardGradientBorder padding="0" borderRadius={{ base: "16px" }}>
          <Box
            w={{ base: "full" }}
            mx="auto"
            bg="card-bg"
            borderRadius="16px"
            rounded={"16px"}
            padding={"32px 24px"}
            borderColor="card-br"
            px={{ base: "6", md: "8" }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "3", md: "6" }}
              align="center"
            >
              {props.image ? (
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
                      src={isProd ? cloudflareImage : props.image}
                      title={props.title}
                      objectFit="contain"
                    />
                  </Box>
                </Stack>
              ) : (
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
                      src={isProd ? cloudflareImage : images[props?.title]}
                      title={props.title}
                      objectFit="contain"
                    />
                  </Box>
                </Stack>
              )}
              <Box flex="1">
                <Stack
                  direction={{ base: "row", md: "row" }}
                  pb="4px"
                  paddingTop="4px"
                >
                  <Circle size="24px" bg="#0C0C4F" color="white">
                    {props.index}
                  </Circle>
                  <Heading
                    variant="h4"
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
        </CardGradientBorder>
      </Box>
    </Box>
  );
};
