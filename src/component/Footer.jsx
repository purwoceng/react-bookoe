const Footer = () => {
  return (
    <div className="grid grid-cols-2 mt-12 ml-12 mr-7">
      <div>
        <p className="text-black text-xl font-poppins mb-4">
          Copyright © 2023 Codemasters.id | All Rights Reserved{" "}
        </p>
      </div>

      <div className=" h-5 w-5 gap-4 flex">
        <div className="flex relative left-[460px] gap-4">
          <img src="./src/assets/Facebook.png"></img>
          <img src="./src/assets/Twitter.png"></img>
          <img src="./src/assets/Instagram.png"></img>
          <img src="./src/assets/LinkedIn.png"></img>
          <img src="./src/assets/Youtube.png"></img>
        </div>
      </div>
    </div>
  );
};
export default Footer;
