import { TProject } from "@/definitions/types";

export const projectsData: TProject[] = [
  {
    images: [
      { src: "/images/projects/FishyBusiness-1.png", type: "image" },
      { src: "/images/projects/FishyBusiness-2.png", type: "image" },
      { src: "/images/projects/FishyBusiness-3.png", type: "image" },
      { src: "/images/projects/FishyBusiness-4.png", type: "image" },
      { src: "/images/projects/FishyBusiness-5.png", type: "image" },
    ],
    title: "Fishy Business",
    tags: [
      "C#",
      "Networking",
      "Unity",
      "Multiplayer Online",
      "3D",
      "Party Game",
      "Game Dev",
    ],
    description:
      "Play as a parent penguin who has to feed its chicks. Dive to hunt your fish or slap to steal opponent’s fish, in order to feed your babies and become the ultimate parent penguin!",
    timeline: "April 2023 - August 2023",
    role: "Gameplay, UI, audio & networking programmer",
    contributions: [
      "Implemented the lobby system using Netcode for Game Objects and Unity Relay",
      "Implemented the scoring system, allowing the players to fullfill their babies' desires",
      "Implemented the attacking system allowing players to slap each other in order to steal their fish",
      "Implemented all the UI logic in the game",
      "Implemented all the audio logic in the game",
    ],
    team: [
      {
        name: "Giovanna Gowmez",
        role: "PM, 2D & Tech Artist, & Level Designer",
        src: "https://www.linkedin.com/in/giovanna-gowmez-278085150/",
      },
      {
        name: "Gurdit Purewal",
        role: "3D Artist",
        src: "https://www.linkedin.com/in/gurdit-purewal-b58596248/",
      },
      {
        name: "Melissa Osorio",
        role: "Gameplay & UI programmer",
        src: "https://www.linkedin.com/in/melissaosoriotavera/",
      },
    ],
    buttonSrc: "https://vfs-gdpg.itch.io/fishy-business",
  },
];
