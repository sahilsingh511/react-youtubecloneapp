import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <Box sx={{ color: "#fff", fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} /> 
      <span style={{ fontFamily: "Roboto", fontSize: "30px", marginLeft: "16px" }}>CloneTube</span>
    </Box>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;