import service from "../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div className="relative">
      <img
        src={service}
        alt=""
      />
      <div className=" absolute inset-0 bg-white m-2 md:m-8 lg:m-14">
        <h2 className="text-[#151515] uppercase text-3xl text-center md:mt-12 lg:mt-20 mb-2">
          Bistro Boss
        </h2>
        <p className=" text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
