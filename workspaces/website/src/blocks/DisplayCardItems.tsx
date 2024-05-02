import { Box, Flex, Container, LinkBox, Link } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { slugify } from "@starknet-io/cms-utils/src/index";
import type { DisplayCardItems } from "@starknet-io/cms-data/src/pages";
import { DisplayCard } from "@ui/Card/DisplayCard";
interface Props extends LocaleProps {
  title: string;
  button?: string;
  buttonLink?: string;
  card_display_items: DisplayCardItems[];
  randomize?: boolean;
}

export default function DisplayCardItems({
  params: { locale },
  title,
  button,
  buttonLink,
  card_display_items,
}: Props): JSX.Element {
  return (
    <Box>
      <Container maxW="1062px">
        <Flex justifyContent="space-between" mb="24px">
          {title && (
            <Heading
              color="heading-navy-fg"
              variant="h3"
              mb="10px"
              fontSize={24}
              id={`toc-${slugify(title)}`}
            >
              {title}
            </Heading>
          )}
          {button && (
            <LinkBox
              as={Link}
              href={buttonLink}
              bgColor="#0C0C4F"
              color="white"
              padding={1}
              paddingInline={2}
              borderRadius="6px"
              fontSize={16}
              style={{ textDecoration: "none" }}
            >
              {button} &rarr;
            </LinkBox>
          )}
        </Flex>
        <Flex gap={4} direction="column" flex={1}>
          {card_display_items?.map(({ title, description }, i) => {
            return (
              <DisplayCard
                key={title + i}
                index={i + 1}
                title={title}
                description={description}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
