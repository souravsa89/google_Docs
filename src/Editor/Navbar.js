import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import CodeIcon from "@material-ui/icons/Code";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ImageIcon from "@material-ui/icons/Image";

import style from "./Navbar.module.css";

const data = [
  {
    icons: <FormatBoldIcon />,
    action: "",
  },
  {
    icons: <FormatItalicIcon />,
    action: "",
  },
  {
    icons: <FormatUnderlinedIcon />,
    action: "",
  },
  {
    icons: <FormatListBulletedIcon />,
    action: "",
  },
  {
    icons: <FormatListNumberedIcon />,
    action: "",
  },
  {
    icons: <FormatQuoteIcon />,
    action: "",
  },
  {
    icons: <CodeIcon />,
    action: "",
  },
  {
    icons: <FormatColorFillIcon />,
    action: "",
  },
  {
    icons: <FormatColorTextIcon />,
    action: "",
  },
  {
    icons: <FormatIndentDecreaseIcon />,
    action: "",
  },
  {
    icons: <FormatIndentIncreaseIcon />,
    action: "",
  },
  {
    icons: <FormatLineSpacingIcon />,
    action: "",
  },
  {
    icons: <FormatSizeIcon />,
    action: "",
  },
  {
    icons: <ImageIcon />,
    action: "",
  },
];

function handleAction(element){
    console.log(element.action)

}

function Navbar() {
  return (
    <div className={style.main}>
      <div className={style.top_bar}>Google Docs</div>
      <div className={style.main_nav}>
        {data.map((element, index) => (
        <button className={style.icon} onClick={()=>handleAction(element)}>
            {element.icons}
        </button>
        ))}
      </div>
      <div className={style.bottom_section}>
        <div className={style.page} contentEditable="true">TYpe here...</div>
      </div>
    </div>
  );
}
export default Navbar;
