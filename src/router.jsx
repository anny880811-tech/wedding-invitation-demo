import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";

export default function Router() {
  const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/invite/:guestId" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  )
}
