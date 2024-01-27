import logo from "./assets/lws-logo-en.svg";
import hero from "./assets/hero-graphics.svg";

export function Hero() {
  return (
    <div className="pt-36 pb-20 md:-mt-[118px]">
      <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
        <div className="text-white">
          <h3 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
            The Future of Learning starts with students at the center
          </h3>
          <button className="px-5 py-2.5 bg-[#038C61] font-semibold rounded-[44px]">
            Learn More
          </button>
        </div>
        <div>
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src={hero}
            width="500px"
            height="500px"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-7">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="block max-w-full h-10" />
          <button className="block bg-[#172227] text-white border-none rounded-3xl px-6 py-2 font-bold">
            Get Admission
          </button>
        </div>

        {/* hero section */}
        <Hero />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="">
      <Header></Header>
    </div>
  );
}
