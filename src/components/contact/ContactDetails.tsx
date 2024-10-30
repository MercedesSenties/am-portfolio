import { ComponentProps } from "@/definitions/types";
import { FiBriefcase, FiLinkedin, FiMail } from "react-icons/fi";

const contacts = [
  {
    name: "anamercedes.senties@gmail.com",
    icon: <FiMail />,
    url: "mailto:anamercedes.senties@gmail.com",
  },
  {
    name: "Ana Mercedes Senties",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ana-mercedes-senties/",
  },
  {
    name: "Resume",
    icon: <FiBriefcase />,
    url: "/files/CV-AnaMercedes.pdf",
  },
];

const ContactDetails: React.FC<ComponentProps> = ({ t }) => {
  return (
    <div id="contact" className="my-20">
      <div>
        <h2 className="text-center my-4 sm:my-8 uppercase">
          {t("header.contact")}
        </h2>
      </div>
      <div className="mt-8 flex md:flex-row items-center content-center gap-12 flex-col">
        <div className="text-center sm:text-left self-center">
          <h4 className="text-xl mb-2 sm:text-2xl">{t("contact.title")}</h4>
          <p>{t("contact.description")}</p>
        </div>
        <ul className="mx-auto space-y-4 sm:mx-0">
          {contacts.map((contact) => (
            <li key={contact.name} className="hover:scale-110 duration-500">
              <a
                href={contact.url}
                download="CV-AnaMercedes.pdf"
                target="__blank"
              >
                <div className="flex gap-2 items-center">
                  <i className="text-2xl">{contact.icon}</i>
                  <p>{contact.name}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
