import ProfileInformation from "./Information"
import Setting from "./Setting"
import Conversation from "./Conversation"
import Projects from "./Project"

export default function IndexPage() {
  return (
    <>
      <div className="flex flex-wrap gap-4 mt-14 w-full h-full ">
        <div className="flex-1 min-w-[280px] sm:min-w-0 h-fill">
          <Setting />
        </div>
        <div className="flex-1 min-w-[280px] sm:min-w-0 h-fill">
          <ProfileInformation />
        </div>
        <div className="flex-1 min-w-[280px] sm:min-w-0 h-fill">
          <Conversation />
        </div>
        <div className="w-full">
          <Projects />
        </div>
      </div>
    </>
  )
}
