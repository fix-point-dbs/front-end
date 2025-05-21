import { motion } from "framer-motion";

export default function Member() {
  const team = [
    { name: "Zarif", role: "Backend Developer", category: "FE & BE" },
    { name: "Greta", role: "Frontend Developer", category: "FE & BE" },
    { name: "Ahkam", role: "Frontend Developer", category: "FE & BE" },
    { name: "Asyam", role: "ML Engineer", category: "ML" },
    { name: "Angga", role: "ML Engineer", category: "ML" },
    { name: "Abim", role: "ML Engineer", category: "ML" },
  ]; 

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] mb-20">
      <div className="flex items-center justify-center">
        <div className="w-24 border-t border-biru"></div>
        <p className="mx-4 mb-1 text-sm font-black text-biru sm:text-sm">
          MEMBER
        </p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mb-4 text-lg font-bold text-center text-gray-800">Team Pengembang</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center p-6 bg-gray-100 rounded-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="flex items-center justify-center w-24 h-24 mb-4 overflow-hidden bg-gray-400 rounded-full">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.u6yI_QLH7-RzpWirGJViHgHaEK&pid=Api&P=0&h=180"
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>

            <p className="font-semibold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
