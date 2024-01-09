const HeroNotFound = () => {
  return (
    <>
      <div className="border border-solid flex m-12 p-12 bg-hero gap-5 ">
        <p className="text-violet-500 text-[42px] font-semibold font-['Poppins']">
          Search For
        </p>
        <p className="text-stone-900 text-[42px] font-semibold font-['Poppins']">
          Eragon
        </p>
      </div>
      <div
        className="border border-solid flex m-12 p-12 gap-5"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="text-violet-500 text-[42px] font-semibold font-['Poppins']">
          Book Not Found
        </p>
      </div>
    </>
  );
};

export default HeroNotFound;
