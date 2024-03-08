import "../styles/searchbar.css";
import { useEffect, useState } from "react";
import { SearchNormal1, NotificationBing, CloseCircle } from "iconsax-react";

const SearchBar = () => {
  let [searchBarElement, setSearchBarElement] = useState<HTMLElement | null>(
    null
  );

  const SearchBarSlideIn = () => {
    if (searchBarElement) {
      (searchBarElement.firstElementChild as HTMLElement).style.animation =
        "searchbar-side-in ease 0.5s forwards";
      setTimeout(() => {
        if (searchBarElement) {
          (
            searchBarElement.firstElementChild?.children[1] as HTMLElement
          ).focus();
        }
      }, 500);
    }
  };

  const SearchBarSlideout = () => {
    if (searchBarElement) {
      (searchBarElement.firstElementChild as HTMLElement).style.animation =
        "searchbar-side-out ease 0.5s forwards";
    }
  };
  
  useEffect(() => {
    // this format is to store the searchBar in the useSate of searchBar element so that i can change the animation later on
    const searchBar = document.getElementById("search-bar");
    searchBarElement = searchBar;
    setSearchBarElement(searchBar);

    setTimeout(() => {
      if (searchBarElement) {
        (searchBarElement.firstElementChild as HTMLElement).style.visibility =
          "visible";
      }
    }, 500);
  }, []);

  return (
    <section id="search-bar">
      <form>
        <SearchNormal1 />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Chatter"
        />
        <CloseCircle variant="Broken" onClick={SearchBarSlideout} />
      </form>

      <div>
        <NotificationBing />
        <button onClick={SearchBarSlideIn}>
          <SearchNormal1 />
        </button>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
