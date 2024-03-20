import { Center, Text, IconButton } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import CloseIcon from "@ui/ProvisionsPopup/CloseIcon/CloseIcon";
import { useEffect, useRef, useState } from "react";

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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const centerRef = useRef<HTMLDivElement>(null);
  const gtmEvent = (target: string) =>
    window.gtag?.("event", target, { event_category: "engagement" });

  const onClose = (event: React.MouseEvent) => {
    gtmEvent("Navbar_banner_close");
    setIsOpen(false);
  };

  const onReadMore = (event: React.MouseEvent) =>
    gtmEvent("Navbar_banner_read_more");

  useEffect(() => {
    const componentHeight =
      document.getElementById("navbar_banner")?.offsetHeight;
    const div = document.getElementById("home_hero");
    if (!div || !componentHeight) return;
    div.style.marginTop = `${componentHeight}px`;
  }, [centerRef]);

  return (
    <Center
      ref={centerRef}
      id="navbar_banner"
      position="fixed"
      top="78px"
      left={0}
      right={0}
      height={{ base: "87px", sm: 12 }}
      px={{ base: 2, xl: "unset" }}
      bgColor="snNavy"
      display={isOpen ? "flex" : "none"}
      gap={{ xs: 3, base: 6 }}
      zIndex={10}
      _dark={{ bgColor: "accent" }}
    >
      {centerRef && (
        <>
          <Center margin="auto" gap={{ xs: 1, sm: 6 }} height="100%">
            <Text
              color="white"
              _dark={{ color: "snNavy" }}
              width={{ base: "245px", sm: "unset" }}
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
              fontSize={{ base: 12, sm: 14 }}
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
            aria-label="Close"
            _dark={{
              color: "snNavy",
              bgColor: "transparent",
              borderColor: "transparent",
              _hover: { bgColor: "transparent" },
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      )}
    </Center>
  );
};

export default NavbarStickyBanner;
