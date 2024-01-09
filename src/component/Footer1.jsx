const Footer1 = () => {
  return (
    <div className="grid grid-cols-2 mt-12 ml-12 mr-7">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <img src="./src/assets/3.png" alt="" className="max-w-full h-auto" />
        </div>

        <div className="flex flex-col justify-center relative right-[250px]">
          <p className="text-black text-2xl font-semibold font-poppins">
            Bookoe
          </p>
          <p className="text-black text-xl font-poppins mb-4">
            Rekomendasi Bukumu
          </p>
        </div>
      </div>

      <div className="justify-between ">
        <p className="text-black text-xl  font-['Poppins']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  );
};
export default Footer1;
