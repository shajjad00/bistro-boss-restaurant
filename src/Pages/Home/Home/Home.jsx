import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className=" max-w-screen-xl mx-auto p-3">
        <Category></Category>
        <About></About>
        <PopularMenu></PopularMenu>
      </div>
    </>
  );
};

export default Home;
