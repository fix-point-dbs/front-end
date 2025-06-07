import React ,{ useEffect, useState } from "react";
import Sidebar from "../../views/admin/sidebar/Sidebar";
import Breadcrumbs from "../../views/admin/header/Breadcrumbs";
import BookingAdmin from "../../views/admin/booking/BookingAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionDiv from "../../utils/TransitionSmoth";
import { BookingAdminPresenter } from "../../presenters/admin/BookingAdminPresenter";
export function BookingAdminPage() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);

  const presenter = new BookingAdminPresenter({ setBookings, setIsLoading });
  console.log(bookings);
  
  useEffect(() => {
    presenter.loadBookings();
  }, []);

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <MotionDiv>
        <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-6 w-full overflow-y-auto mt-12 lg:mt-0">
            <Breadcrumbs />
            <BookingAdmin bookings={bookings.data} isLoading={isLoading} />
        </div>
        </MotionDiv>
    </section>
  );
}