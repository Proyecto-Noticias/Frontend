import React, { memo } from "react";

import NewsSection from "../components/news/NewsSection";
import NewsGrid from "../components/news/NewsGrid";
import { UserSearch } from "../components/news/UserSearch";
import { useSelector } from "react-redux";
import { NewsPerCountry } from "../components/news/NewsPerCountry";
import { SearchSomething } from "../components/SearchSomething";

const HomeScreen = () => {
  const { searchValue } = useSelector((state) => state.news);
  const { checking } = useSelector((state) => state.auth);

  return (
    <>
      <NewsSection />
      {(searchValue === '' ) ?  <SearchSomething /> : <UserSearch />  }
      <NewsGrid />

      {!checking && <NewsPerCountry />}
    </>
  );
};

export default memo(HomeScreen);
