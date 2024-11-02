import ContactDetails from "@/components/contact/ContactDetails";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/ProjectsGrid";
import AppBanner from "@/components/shared/AppBanner";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { i18n } from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"], { i18n })),
    },
  };
};

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto">
      <AppBanner t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <ContactDetails t={t} i18n={i18n} />
    </div>
  );
};

export default Home;
