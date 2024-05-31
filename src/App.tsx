import GlobalStyles from "./shared/Styles";
import ThemeProvider from "./shared/Utils/Context/ThemeContext";
import RoutesApp from "./routes.tsx";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
