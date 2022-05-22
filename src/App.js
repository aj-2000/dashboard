import { Box, Stack } from "@mui/material";

import CompareCars from "./components/CompareCars";
import Navbar from "./layout/Navbar";
import { useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataAnalyzer from "./pages/DataAnalyzer";

function App() {
  let location = useLocation();
  return (
    <Box>
      <Stack spacing={2}>
        <Navbar/>
        <div>
        {(location.pathname=='/' || location.pathname=='/dashboard')  && <Dashboard/>}
        {location.pathname=='/analyzer' && <DataAnalyzer/>}
        </div>  
      </Stack>
    </Box>
  );
}

export default App;