import { Center, Text, IconButton } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import CloseIcon from "@ui/Icons/CloseIcon/CloseIcon";
import { useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { sha256 } from "js-sha256";
import ClientOnly from "../ClientOnly";
import { gtmEvent } from "src/utils/utils";

interface NavbarStickyBannerProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

const NavbarStickyBanner = ({
  text,
  buttonText,
  buttonLink,
}: NavbarStickyBannerProps) => {
  const hash = useMemo(
    () => sha256(text + buttonLink + buttonText).slice(-8),
    [text, buttonLink, buttonText]
  );

  const [isOpen, setIsOpenStorage] = useLocalStorage(
    `isNavbarStickyBannerOpen_${hash}`,
    true
  );

  const onClose = () => {
    gtmEvent("Navbar_banner_close");
    setIsOpenStorage(false);
  };

  const onReadMore = () => gtmEvent("Navbar_banner_read_more");

  return (
    <ClientOnly>
      <Center
        px={{ base: 4, xl: "unset" }}
        bgColor="snNavy"
        display={isOpen ? "flex" : "none"}
        overflow="hidden"
        transition="max-height 1.5s"
        gap={{ base: 2, md: 6 }}
        py={2}
        zIndex={10}
        _dark={{ bgColor: "surfaceAccent" }}
      >
        <Center margin="auto" gap={{ xs: 1, sm: 6 }} height="100%">
          <Text
            textAlign={{ base: "left", md: "center" }}
            color="white"
            _dark={{ color: "snNavy" }}
            width={{ base: "unset", sm: "245px", md: "unset" }}
            fontSize={{ base: "12px", sm: "14px", lg: "unset" }}
            noOfLines={2}
          >
            {text}
          </Text>
          <Button
            onClick={onReadMore}
            href={buttonLink}
            px={4}
            py={1}
            borderRadius={8}
            bgColor="white"
            color="snNavy"
            fontWeight={600}
            lineHeight="21px"
            fontSize={14}
            _dark={{
              color: "white",
              bgColor: "darkMode.card",
              borderColor: "darkMode.card",
            }}
            _hover={{ bgColor: "white" }}
            variant="solid"
          >
            {buttonText}
          </Button>
        </Center>
        <IconButton
          width="22px"
          height="22px"
          aria-label="Close"
          mx={2}
          _dark={{
            color: "darkMode.card",
            bgColor: "transparent",
            borderColor: "transparent",
            _hover: { bgColor: "transparent" },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Center>
    </ClientOnly>
  );
};

export default NavbarStickyBanner;
