function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center py-6 px-6">
      <div className="text-xs sm:text-base text-ternary-dark dark:text-ternary-light">
        {new Date().getFullYear()} &copy; AM, All Rights Reserved |
        <a
          href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
          target="__blank"
          className="hover:text-neutral-400 ml-1 duration-500">
          Template: STOMAN |
        </a>
        <a
          href="https://emilia-schettino.com/"
          target="__blank"
          className="hover:text-neutral-400 ml-1 duration-500">
          Animations: Emilia Schettino
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
