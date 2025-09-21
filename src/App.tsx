// src/App.tsx
import "./App.css";
import AppRoutes from "./routes";
import Navbar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import GoogleAnalyticsTracker from "./components/shared/GoogleAnalyticsTracker";
// import Banner from "./components/shared/Banner";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <GoogleAnalyticsTracker />
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      {/* <Banner /> */}
    </div>
  );
}
export default App;
