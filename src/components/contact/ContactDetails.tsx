import { ComponentProps } from "@/definitions/types";
import { FiBriefcase, FiLinkedin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "anamercedes.senties@gmail.com",
    icon: <FiMail />,
    url: "mailto:anamercedes.senties@gmail.com",
  },
  {
    id: 2,
    name: "Ana Mercedes Senties",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ana-mercedes-senties/",
  },
  {
    id: 3,
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
        <div className="text-center sm:text-justify self-center">
          <h4 className="text-xl mb-2 sm:text-2xl">{t("contact.title")}</h4>
          <p>{t("contact.description")}</p>
        </div>
        <ul className="self-center">
          {contacts.map((contact) => (
            <a
              href={contact.url}
              download="CV-AnaMercedes.pdf"
              target="__blank"
              key={contact.id}
            >
              <li
                className="flex hover:scale-110 duration-500"
                key={contact.id}
              >
                <i className="text-2xl pr-4">{contact.icon}</i>
                <span className="text-lg mb-4">{contact.name}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
