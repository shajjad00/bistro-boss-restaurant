const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className=" text-[#D99904] italic text-lg text-center mt-20">
        {subHeading}
      </p>
      <div className="divider  w-60 mx-auto"></div>
      <p className="text-[#151515] text-3xl text-center">{heading}</p>
      <div className="divider text-gray-950 w-60 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
