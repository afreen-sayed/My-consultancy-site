import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import AuthModal from "./components/AuthModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Protected({ children }: { children: ReactNode }) {
  const [showAuth, setShowAuth] = useState(false);
  const authed = useMemo(() => !!localStorage.getItem("authToken"), []);

  useEffect(() => {
    if (!authed) setShowAuth(true);
  }, [authed]);

  return (
    <>
      {!authed && (
        <AuthModal
          isOpen={showAuth}
          onClose={() => setShowAuth(false)}
          onAuthed={() => window.location.reload()}
        />
      )}
      {authed ? children : <div style={{ height: 1 }} />}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Routes>
        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />
        <Route
          path="/admin/users"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />
        <Route
          path="/admin/requests"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />

        {/* Public routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
