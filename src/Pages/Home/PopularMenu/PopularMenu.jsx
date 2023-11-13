import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </section>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        {menu.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>
        ))}
      </div>
      <div className=" flex justify-center mb-14">
        <button className=" text-[#1F2937] font-medium border-b-4 rounded-lg border-[#1F2937] py-2">
          VIEW FULL MENU
        </button>
      </div>
    </>
  );
};

export default PopularMenu;
