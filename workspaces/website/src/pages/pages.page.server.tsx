import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const { locale } = pageContext;
  const mainMenu = await getMainMenu(locale, pageContext.getJSON);
  const messages = await getMessages(locale);
  const alerts = await getAlerts(locale, pageContext.getJSON);
  const data = await getPageBySlug(
    pageContext.routeParams["*"] || "home",
    locale,
    pageContext.getJSON
  ).catch(() => null);

  return {
    pageContext: {
      alerts,
      messages,
      mainMenu,
      pageProps: { data },
    },
  };
}
