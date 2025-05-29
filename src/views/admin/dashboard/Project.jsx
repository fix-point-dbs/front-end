import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Project() {
  const items = [
    {
      title: "Modern",
      description: "As Uber works through a huge amount of internal management turmoil",
      img: "https://i.pravatar.cc/300",
    },
    {
      title: "Scandinavian",
      description: "Music is something that every person has his or her own opinion about",
      img: "https://i.pravatar.cc/300",
    },
    {
      title: "Minimalist",
      description: "Different people have different taste, and various types of music",
      img: "https://i.pravatar.cc/300",
    },
  ]

  return (
    <div className="flex flex-col bg-white rounded-lg py-4 px-4 gap-4 w-full h-fit dark:bg-gray-700">
      <div className="text-base font-semibold text-black dark:text-white">
        <h2 className="text-lg sm:text-xl">Projects</h2>
        <p className="text-gray-500 font-normal text-sm sm:text-base dark:text-gray-300">Architects design houses</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left rounded-md group hover:shadow-lg transition-shadow duration-200"
          >
            <div className="w-full aspect-square overflow-hidden rounded-md">
              <img
                src={item.img || "/placeholder.svg"}
                alt={`${item.title} project`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-black mt-3 dark:text-white line-clamp-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 dark:text-gray-300 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
            <button className="text-xs sm:text-sm text-teal-500 mt-3 border border-teal-500 px-3 py-1.5 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200">
              VIEW ALL
            </button>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center text-center p-4 rounded-md border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-teal-300 dark:hover:border-teal-500 transition-colors duration-200 min-h-[200px] sm:min-h-[250px]">
          <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xl sm:text-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-teal-400 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3 font-medium">Create a New Project</p>
        </div>
      </div>
    </div>
  )
}
