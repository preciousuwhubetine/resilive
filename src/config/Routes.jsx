import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import HomePage from "../application/views/Homepage/Homepage"

import Header from "../application/components/Header/Header.jsx";
import Footer from "../application/components/Footer/Footer.jsx";
import Quote from "../application/components/Popups/Quote/Quote.jsx";

export default function Config () {
  const location = useLocation();
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Quote
        open={showQuotePopup}
        setOpen={() => setShowQuotePopup(true)}
        onClose={() => setShowQuotePopup(false)}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}
