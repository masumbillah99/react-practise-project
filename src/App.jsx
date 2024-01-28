import logo from "./assets/lws-logo-en.svg";
import hero from "./assets/hero-graphics.svg";
import avatar from "./assets/avatar.png";
import { useState } from "react";

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
        <Hero></Hero>
      </div>
    </section>
  );
}

export function StudentsTable() {
  // const [classOneData, setClassOneData] = useState("");

  const infoData = [
    {
      id: 1,
      name: "Bruce Wayne",
      class: "Class One",
      scores: "A",
      percentage: 86,
    },
    {
      id: 2,
      name: "Beauty",
      class: "Class One",
      scores: "A",
      percentage: 87,
    },
    {
      id: 3,
      name: "Charlie Chaplin",
      class: "Class One",
      scores: "B",
      percentage: 85,
    },
    {
      id: 4,
      name: "Lamia Akter",
      class: "Class One",
      scores: "A",
      percentage: 87,
    },
    {
      id: 5,
      name: "Morjina Akter",
      class: "Class One",
      scores: "A",
      percentage: 100,
    },
    {
      id: 6,
      name: "Frank Johnson",
      class: "Class One",
      scores: "B",
      percentage: 86,
    },
    {
      id: 7,
      name: "Grace Dupley",
      class: "Class One",
      scores: "A+",
      percentage: 86,
    },
    {
      id: 8,
      name: "Harry Miller",
      class: "Class One",
      scores: "A",
      percentage: 87,
    },
    {
      id: 9,
      name: "Ivy Rahman",
      class: "Class One",
      scores: "B",
      percentage: 86,
    },
    {
      id: 10,
      name: "Jack Ma",
      class: "Class One",
      scores: "A",
      percentage: 86,
    },
    {
      id: 11,
      name: "Alison Backer",
      class: "Class Two",
      scores: "B",
      percentage: 84,
    },
    {
      id: 12,
      name: "Bella Warner",
      class: "Class Two",
      scores: "A",
      percentage: 86,
    },
    {
      id: 13,
      name: "Hero Alom",
      class: "Class Two",
      scores: "A",
      percentage: 86,
    },
    {
      id: 14,
      name: "David Wilson",
      class: "Class Two",
      scores: "A",
      percentage: 87,
    },
    {
      id: 15,
      name: "Emiliano Martinez",
      class: "Class Two",
      scores: "A",
      percentage: 87,
    },
    {
      id: 16,
      name: "Faruk Islam",
      class: "Class Two",
      scores: "A",
      percentage: 86,
    },
    {
      id: 17,
      name: "Grace Smith",
      class: "Class Two",
      scores: "B",
      percentage: 86,
    },
    {
      id: 18,
      name: "Harry Davis",
      class: "Class Two",
      scores: "A",
      percentage: 87,
    },
    {
      id: 19,
      name: "Abul Kalam",
      class: "Class Two",
      scores: "A+",
      percentage: 86,
    },
    {
      id: 20,
      name: "Riyad Hossen",
      class: "Class Two",
      scores: "A",
      percentage: 100,
    },
  ];

  const organizedData = infoData.reduce((acc, student) => {
    const { class: studentClass } = student;
    if (!acc[studentClass]) {
      acc[studentClass] = [];
    }
    acc[studentClass].push(student);
    return acc;
  }, {});

  // console.log(organizedData);

  return (
    <section className="bg-[#172227] py-24 lg:pt-[120px] lg:pb-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center pb-20">
          <h3 className="text-3xl lg:text-[40px] font-bold text-white mb-9">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h3>

          {/* search box */}
          <form className="flex">
            <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
              <input
                type="search"
                className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                placeholder="Search by Student "
                required
              />
              <button
                type="submit"
                className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* student table data */}

        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(organizedData).map(([classKey, students]) => (
                <>
                  <tr className="bg-white/5">
                    <td className="p-5 text-sm md:text-xl" colspan="4">
                      {classKey}
                    </td>
                  </tr>

                  {students.map((stu, index) => (
                    <tr className="border-b border-[#7ECEB529]">
                      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
                      <td className="p-5 text-sm md:text-xl">
                        <div className="flex space-x-3 items-center">
                          <img
                            className="w-8 h-8"
                            src={avatar}
                            width="32"
                            height="32"
                            alt={stu.name}
                          />
                          <span className="whitespace-nowrap">{stu.name}</span>
                        </div>
                      </td>
                      <td className="p-5 text-sm md:text-xl text-center">
                        {stu.scores}
                      </td>
                      <td className="p-5 text-sm md:text-xl text-center">
                        {stu.percentage}%
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
}

export function Footer() {
  return (
    <footer class="mt-32">
      <div class="mx-auto">
        <p class="text-center text-lg text-gray-500">
          Copyright ©2024 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header></Header>
      <StudentsTable></StudentsTable>
    </>
  );
}
