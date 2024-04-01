import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { LatestAnnouncements } from "@starknet-io/cms-data/src/settings/latest-announcements";
import { gtmEvent } from "functions/[[route]]";

interface NavbarStickyBannerProps {
  readonly list: readonly LatestAnnouncements[];
}

const LatestAnnouncementsBlock = ({ list }: NavbarStickyBannerProps) => {
  const onReadMore = () => gtmEvent("Latest_announcement_read_more");
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "unset", lg: "200px" }}
      right={{ base: "unset", lg: "32px" }}
      width={{ base: "100%", lg: "225px" }}
      mt={{ base: 6, lg: "unset" }}
      mb={{ base: 6, lg: "unset" }}
      p={3}
      gap={6}
      backgroundColor="surface"
      borderRadius={8}
      zIndex={{ base: "unset", lg: 100 }}
    >
      <Heading
        as="h5"
        fontSize={18}
        fontWeight={600}
        textAlign="left"
        mb={3}
        lineHeight="25px"
        color="snNavy"
      >
        Latest announcements
      </Heading>
      <Box display="flex" flexDir={{ base: "row", lg: "column" }} gap={4}>
        {list.map((item) => (
          <Box key={item.buttonLink + item.text}>
            <Image
              src={item.image}
              alt={item.image}
              borderRadius={8}
              width="200px"
              height="100px"
            />
            <Text
              fontSize={14}
              mt={3}
              fontWeight={600}
              mb={2}
              color="snNavy"
              lineHeight="21px"
            >
              {item.text}
            </Text>
            <Link
              href={item.buttonLink}
              color="Link"
              fontWeight="500"
              onClick={onReadMore}
              fontSize={12}
            >
              {item.buttonText} -{">"}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LatestAnnouncementsBlock;
