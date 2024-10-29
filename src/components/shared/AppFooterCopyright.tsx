function AppFooterCopyright() {
  return (
    <div className=" flex justify-center items-center text-center py-6 px-6">
      <div className="text-xs sm:text-base">
        {new Date().getFullYear()} &copy; AM, All Rights Reserved |
        <a
          href="https://emilia-schettino.com/"
          target="__blank"
          className="hover:text-neutral-400 ml-1 duration-500"
        >
          Animations: Emilia Schettino
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
