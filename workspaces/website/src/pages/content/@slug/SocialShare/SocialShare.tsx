import { Flex, Icon, Text } from "@chakra-ui/react";
import { TwitterShareButton, TelegramShareButton } from "react-share";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
}

const SocialShare = ({ params: { slug, locale } }: Props) => {
  const shareUrl = `${import.meta.env.VITE_SITE_URL}${locale}/content/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const handleLinkedinShare = () => window.open(linkedinShareUrl, "_blank");

  return (
    <Flex
      gap={"24px"}
      position={{ base: "relative", xl: "fixed" }}
      top={{ base: "unset", xl: "200px" }}
      right={{ base: "unset", xl: "300px" }}
    >
      <Text display={{ base: "unset", xl: "none" }}>Share this post:</Text>

      <Flex
        alignItems={"center"}
        gap={"8px"}
        flexDir={{ base: "row", xl: "column" }}
      >
        <TwitterShareButton url={shareUrl}>
          <Icon
            title="TwitterShareButton"
            boxSize="26px"
            pt="1"
            color="grey.coolText"
            _dark={{ color: "grey.morning" }}
            as={FaTwitter}
          />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <Icon
            title="TelegramShareButton"
            boxSize="26px"
            pt="1"
            color="grey.coolText"
            _dark={{ color: "grey.morning" }}
            as={FaTelegram}
          />
        </TelegramShareButton>
        <Icon
          title="LinkedinShareButton"
          boxSize="22px"
          padding="0"
          color="grey.coolText"
          _dark={{ color: "grey.morning" }}
          as={FaLinkedin}
          onClick={handleLinkedinShare}
        />
      </Flex>
    </Flex>
  );
};

export default SocialShare;
