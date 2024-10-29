import AboutMe from "@/components/about/AboutMe";
import ContactDetails from "@/components/contact/ContactDetails";
import Projects from "@/components/projects/ProjectsGrid";
import AppBanner from "@/components/shared/AppBanner";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es")),
    },
  };
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <AppBanner t={t} />
      <Projects t={t} />
      <AboutMe t={t} />
      <ContactDetails t={t} />
    </div>
  );
};

export default Home;
