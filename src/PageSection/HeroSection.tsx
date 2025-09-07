import LightRays from "../components/ReactBits/LightRays/LightRays";
import ProfileCard from "../components/ReactBits/ProfileCard/ProfileCard";
import SeraButtonView from "../components/SeraUI/SeraButtonView";
import pinkGlow2 from "../assets/glow/Gradient.png";
 


export const HeroSection = () => {
  return (
    <>
      <LightRays className="fixed" />
      <div id="hero" className="container h-screen">
        <div className="flex justify-around items-center max-sm:pl-2 max-sm:pe-2 gap-8 md:gap-12 lg:gap-2 h-full w-full max-lg:text-center max-sm:flex-col-reverse max-lg:flex-col max-lg:pt-20">
          {/* Glow  */}
           <img className="absolute max-sm:w-72 -z-1 right-0 lg:right-50" src={pinkGlow2} alt="glow" />
          {/* Left side  */}
          <div className="max-sm:pt-16">
            <h1 className="text-white font-bold  text-6xl max-sm:text-3xl max-lg:text-5xl">
              Building 
               <span className="px-3 text-purple-600">Seamless</span>
                digital experiences for web!
            </h1>
            <p className="text-slate-300 max-sm:px-1 text-wrap py-7 lg:py-10 text-xl max-w-2xl max-lg:text-center max-lg:m-auto lg:max-w-3xl max-lg:text-lg max-sm:text-sm">
              I design and develop websites and apps that are intuitive, performant, and visually stunning. My passion is turning ideas into engaging digital products.
            </p>
            <SeraButtonView />

            {/* Social Link  */}
            <div className="flex max-lg:justify-center gap-2 md:gap-8 pt-15 md:pt-8">
              <a className="github-link" href="https://github.com/nayemalways" target="_blank">
                <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
                </svg>
              </a>

              
              <a className="linkedin-link" href="https://linkedin.com/in/nayemalways" target="_blank">
                <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/>
                </svg>
              </a>

            
              <a className="twitter-link" href="https://x.com/nayemalways" target="_blank">
                <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"/>
                </svg>
              </a>

              
              <a className="facebook-link" href="https://facebook.com/nayemalways" target="_blank">
                <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12.0672C23 5.95496 18.0751 1 12 1C5.92486 1 1 5.95496 1 12.0672C1 17.5912 5.02254 22.1697 10.2812 23V15.2663H7.48828V12.0672H10.2812V9.62898C10.2812 6.85525 11.9235 5.32313 14.4361 5.32313C15.6396 5.32313 16.8984 5.53929 16.8984 5.53929V8.26287H15.5114C14.1449 8.26287 13.7188 9.11597 13.7188 9.99119V12.0672H16.7695L16.2818 15.2663H13.7188V23C18.9775 22.1697 23 17.5912 23 12.0672Z"/>
                </svg>
              </a>
            </div>

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

