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

function ContactDetails() {
  return (
    <div
      id="contact"
      className="my-20">
      <div className="text-ternary-dark dark:text-ternary-light">
        <p className="text-center font-sketch text-2xl sm:text-4xl my-4 sm:my-8">
          CONTACT
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 lg:flex-row py-5 lg:py-10 lg:mt-5 text-primary-dark dark:text-primary-light">
        <div className="text-center sm:text-justify self-center">
          <h2 className="font-general-medium text-xl mb-2 sm:text-2xl">
            I{"'"}d love to get in touch!
          </h2>
          <p className="font-general-light text-lg md:text-2xl lg:text-xl">
            Feel free to send me a message on LinkedIn, or reach out over email.
          </p>
        </div>
        <ul className="self-center">
          {contacts.map((contact) => (
            <a
              href={contact.url}
              download="CV-AnaMercedes.pdf"
              target="__blank"
              key={contact.id}>
              <li
                className="flex hover:scale-110 duration-500"
                key={contact.id}>
                <i className="text-2xl pr-4">{contact.icon}</i>
                <span className="text-lg mb-4">{contact.name}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactDetails;
