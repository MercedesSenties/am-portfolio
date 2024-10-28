import AboutMe from "@/components/about/AboutMe";
import ContactDetails from "@/components/contact/ContactDetails";
import AppBanner from "@/components/shared/AppBanner";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es")),
    },
  };
};

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner />
      <AboutMe />

      <ContactDetails />
    </div>
  );
};

export default Home;
