import Accepted from "./Accepted";
import Done from "./Done";
import OnTheWay from "./OnTheWay";
import Waiting from "./Waiting";
import Rejected from "./Rejected";

export function Konfirmasi({ status }) {
  return (
    <>
      {status === "waiting" && <Waiting />}
      {status === "accepted" && <Accepted />}
      {status === "on-the-way" && <OnTheWay />}
      {status === "done" && <Done />}
      {status === "rejected" && <Rejected />}
    </>
  );
}
