import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Gimana cara pake websitenya bang?",
    answer:
      "Kamu tinggal daftar, login, dan langsung bisa akses semua fitur tanpa ribet!",
  },
  {
    question: "Apakah kita bisa menghubungi bengkel dan towing terkait?",
    answer:
      "Tentu! Website ini sudah terintegrasi dengan kontak bengkel dan towing mitra kami.",
  },
  {
    question: "Apakah website ini terjamin aman bang?",
    answer:
      "Ya, keamanan adalah prioritas kami. Semua data dienkripsi dan aman dari pihak ketiga.",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[60px] mb-20"
    >
      <div className="flex items-center justify-center">
        <div className="w-24 border-t border-biru"></div>
        <p className="mx-4 mb-1 text-sm font-black text-biru sm:text-sm">
          QUESTION
        </p>
        <div className="w-24 border-t border-biru"></div>
      </div>
      <h2 className="mb-4 text-lg font-bold text-center text-gray-800">
        Pertanyaan yang Sering Diajukan
      </h2>

      <div className="bg-white divide-y rounded-lg shadow">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleQuestion(index)}
              className="flex items-center justify-between w-full px-6 py-4 text-left transition duration-200 hover:bg-gray-100 focus:outline-none"
            >
              <span
                className={`font-medium ${
                  openIndex === index ? "text-biru" : "text-gray-900"
                }`}
              >
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-orange-500" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-4 text-sm text-gray-600 md:text-base"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
