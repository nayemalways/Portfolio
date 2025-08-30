import GradientText from "../components/ReactBits/GradientText/GradientText";
import LightRays from "../components/ReactBits/LightRays/LightRays";
import ProfileCard from "../components/ReactBits/ProfileCard/ProfileCard";
 import SeraButtonView from "../components/SeraUI/SeraButtonView";
 


export const HeroSection = () => {
  return (
    <>
      <LightRays className="fixed" />
      <div className="container h-screen">
        <div className="flex justify-around items-center gap-8 md:gap-12 lg:gap-2  h-full w-full max-lg:text-center max-sm:flex-col-reverse max-lg:flex-col max-lg:pt-20">
          {/* Left side  */}
          <div className="max-sm:pt-16 ">
            <h1 className="text-white font-bold text-6xl max-sm:text-3xl max-lg:text-5xl">
              Building 
              <GradientText
                  colors={["#7127BA", "#4079ff", "#40ffaa", "#40ffaa", "#40ffaa"]}
                  animationSpeed={1}
                  showBorder={false}
                  className="inline px-3"
                >
                  Seamless
                </GradientText>
                digital experiences for web!
            </h1>
            <p className="text-slate-300 max-sm:px-1 py-7 lg:py-10 text-xl max-w-2xl max-lg:text-center max-lg:m-auto lg:max-w-3xl max-lg:text-lg max-sm:text-sm">
              I design and develop websites and apps that are intuitive, performant, and visually stunning. My passion is turning ideas into engaging digital products.
            </p>
            <SeraButtonView />
          </div>

          {/* Right side  */}
          <div>
            <ProfileCard
              name="Nayem Ahmed"
              title="Fullstack Developer"
              handle="nayemalways"
              status="Online"
              className="z-index: 9999"
              contactText="Contact Me"
              avatarUrl="https://avatars.githubusercontent.com/u/124289808?v=4"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

