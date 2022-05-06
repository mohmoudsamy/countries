import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const selectMenuArrow = <FontAwesomeIcon icon={faAngleDown} />;

const Dropdown = ({ props }) => {
  const [theRegion, setTheRegion] = useState("");
  // console.log(props.region);
  const refItemsMenu = useRef();
  const refSelectedItem = useRef();
  const dropdown = useRef();

  const onOpenMenu = () => {
    refItemsMenu.current.classList.toggle("active");
    refSelectedItem.current.nextElementSibling.classList.toggle("icon__rotate");
  };
  const onSelectItems = (event) => {
    refSelectedItem.current.textContent = event.target.textContent;
    onOpenMenu();
    setTheRegion(event.target.textContent);
  };

  document.addEventListener("click", (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      refItemsMenu.current.classList.remove("active");
      refSelectedItem.current.nextElementSibling.classList.remove(
        "icon__rotate"
      );
    }
  });

  return (
    <ul className="dropdown" ref={dropdown}>
      <div className="dropdown__items-selected" onClick={onOpenMenu}>
        <span ref={refSelectedItem}>Filter by Region</span>
        {selectMenuArrow}
      </div>
      <div
        className="dropdown__items-menu"
        ref={refItemsMenu}
        onClick={onSelectItems}
      >
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </div>
    </ul>
  );
};

export default Dropdown;
