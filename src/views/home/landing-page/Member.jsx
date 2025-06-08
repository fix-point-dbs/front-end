import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import fotoZarif from "../../../assets/images/member/zarif.png";
import fotoGreta from "../../../assets/images/member/greta.jpeg";
import fotoAhkam from "../../../assets/images/member/ahkam.png";
import fotoAsyam from "../../../assets/images/member/asyam.png";
import fotoAngga from "../../../assets/images/member/angga.jpeg";
import fotoAbim from "../../../assets/images/member/abim.jpg";
export default function Member() {
  const team = [
    {
      name: "Zarif",
      role: "Backend Developer",
      image: fotoZarif,
      category: "FE & BE",
      linkedin: "https://www.linkedin.com/in/adzazarif/",
      github: "https://github.com/adzazarif",
      instagram: "https://www.instagram.com/adzazarifnur/",
    },
    {
      name: "Greta",
      role: "Frontend Developer",
      image: fotoGreta,
      category: "FE & BE",
      linkedin: "https://www.linkedin.com/in/greta-wahyu-dhita-mehdaliya-54144a326/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/ady_grt",
    },
    {
      name: "Ahkam",
      role: "Frontend Developer",
      image: fotoAhkam,
      category: "FE & BE",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Asyam",
      role: "ML Engineer",
      image: fotoAsyam,
      category: "ML",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Angga",
      role: "ML Engineer",
      image: fotoAngga,
      category: "ML",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Abim",
      role: "ML Engineer",
      image: fotoAbim,
      category: "ML",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      instagram: "https://www.instagram.com/",
    },
  ];

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] mb-20">
      <div data-aos="fade-up" className="flex items-center justify-center">
        <div className="w-24 border-t border-biru"></div>
        <p className="mx-4 mb-1 text-sm font-black text-biru sm:text-sm">
          MEMBER
        </p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mb-10 text-lg font-bold text-center text-gray-800">
        Team Pengembang
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-md px-6 py-8 text-center hover:shadow-md hover:shadow-gray-300"
          >
            {/* Profile image with blue border */}
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-lg font-bold text-black">{member.name}</h3>
            <p className="text-sm text-blue-600 font-semibold mb-2">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-xs text-gray-500 mb-4">
              Glavi amet ritnisi libero molestie ante ut fringilla purus eros
              quis glavrid from dolor amet iquam lorem bibendum
            </p>

            {/* Social Media */}
            <div className="flex gap-4 bg-blue-500 px-4 py-2 rounded-md text-white text-sm">
              <a target="_blank" href={member.github}>
                <FaGithub />
              </a>
              <a target="_blank" href={member.linkedin}>
                <FaLinkedin />
              </a>
              <a target="_blank" href={member.instagram}>
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
