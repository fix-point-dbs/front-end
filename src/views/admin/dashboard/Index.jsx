import Kotak from "./Kotak"
import Graph from "./Graph"
import Table from "./Table"

export default function IndexPage() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-14 w-full h-full">
        {/* Kotak section - full width */}
        <div className="w-full">
          <Kotak />
        </div>
        
        {/* Graph and Table section - side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="w-full">
            <Graph />
          </div>
          <div className="w-full overflow-x-auto">
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}
