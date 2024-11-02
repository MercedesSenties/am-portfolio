import { TContact } from "@/definitions/types";
import { I18n } from "next-i18next";
import { FiBriefcase, FiLinkedin, FiMail } from "react-icons/fi";

interface ContactProps {
  t: (key: string) => string;
  i18n: I18n;
}

const ContactDetails: React.FC<ContactProps> = ({ t, i18n }) => {
  const contacts: TContact[] = [
    {
      title: "Email",
      subtitle: "anamercedes.senties@gmail.com",
      icon: FiMail,
      url: "mailto:anamercedes.senties@gmail.com",
    },
    {
      title: "LinkedIn",
      subtitle: "Ana Mercedes Senties",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/ana-mercedes-senties/",
    },
    {
      title: t("contact.CV"),
      subtitle: "Ana Mercedes Senties",
      icon: FiBriefcase,
      url:
        i18n.language === "en"
          ? "/files/CV-AnaMercedes-en.pdf"
          : i18n.language === "es"
            ? "/files/CV-AnaMercedes-es.pdf"
            : "/files/CV-AnaMercedes-it.pdf",
    },
  ];

  return (
    <section className="mt-14 text-center">
      <h3 className="text-xl md:text-3xl">{t("contact.title")}</h3>
      <p className="mt-1">{t("contact.subtitle")}</p>
      <div className="flex justify-between md:flex-row flex-col items-center mt-8 gap-4">
        {contacts.map((contact) => (
          <a
            href={contact.url}
            download="CV-AnaMercedes.pdf"
            target="__blank"
            key={contact.title}
            className="hover:scale-125 transition-transform duration-500"
          >
            <contact.icon className="text-2xl mx-auto" />
            <h5 className="text-xl lg:text-2xl">{contact.title}</h5>
            <h6 className="text-sm lg:text-md">{contact.subtitle}</h6>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
