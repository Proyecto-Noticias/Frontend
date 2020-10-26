import React from "react";
import Navbar from "../components/shared/Navbar";
import NewsDetail from "../components/news/NewsDetail";
import Footer from "../components/shared/Footer";

function NewsDetailView() {
  return (
    <div>
      <Navbar />
      <NewsDetail />
      <Footer />
    </div>
  );
}

export default NewsDetailView;
