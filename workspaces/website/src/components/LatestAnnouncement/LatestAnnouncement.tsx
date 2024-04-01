import { Box, Text, Heading, FlexProps } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { LatestAnnouncements } from "@starknet-io/cms-data/src/settings/latest-announcements";
import { Image } from "@ui/ArticleCard/ArticleCard";
import { gtmEvent } from "src/utils/utils";

interface NavbarStickyBannerProps extends FlexProps {
  readonly list: readonly LatestAnnouncements[];
}

const LatestAnnouncement = ({ list, ...rest }: NavbarStickyBannerProps) => {
  if (list.filter(({ isActive }) => !isActive).length) return null;

  const onReadMore = () => gtmEvent("Latest_announcement_read_more");

  return (
    <Box
      position={{ base: "relative", lg: "sticky" }}
      top={{ base: "unset", lg: 100 }}
      height="fit-content"
      left={{ base: "unset", lg: "calc(100% - 32px)" }}
      width={{ base: "100%", lg: "225px" }}
      mt={{ base: 6, lg: "unset" }}
      mb={{ base: 6, lg: "unset" }}
      p={{ base: 4, lg: 3 }}
      gap={{ lg: 6 }}
      backgroundColor="surface"
      borderRadius={8}
      {...rest}
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
      <Box
        display="flex"
        flexDir={{ sm: "row", md: "row", xs: "column", lg: "column" }}
        gap={4}
        justifyContent={{ base: "space-between", lg: "unset" }}
      >
        {list.map((item) => (
          <Box key={item.buttonLink + item.text}>
            <Image
              url={item.image}
              imageAlt={item.image}
              borderRadius={8}
              width={{ base: "375px", lg: "200px" }}
              height={{ base: "186px", lg: "100px" }}
              sx={{
                img: {
                  aspectRatio: 16 / 9,
                  filter: "blur(6px)",
                  objectFit: "cover !important",
                  transform: "scale(1.05)",
                  transition: "transform 0.4s ease-in-out",
                  width: "100%",
                  minWidth: "100%",
                  zIndex: -1,
                },
              }}
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

export default LatestAnnouncement;
