

import { createTheme,responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

let theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});

theme=responsiveFontSizes(theme)

export default theme;