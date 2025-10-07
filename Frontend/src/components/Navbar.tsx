"use client";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, User as UserIcon, LogOut } from "lucide-react";
import AuthModal from "./AuthModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [authOpen, setAuthOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [authed, setAuthed] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthed(!!token);
    try {
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1] || ""));
        setRole(payload?.role || null);
      } else {
        setRole(null);
      }
    } catch {
      setRole(null);
    }
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-foreground">
              ConsultPro
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Login/Admin first */}
            {authed && role === "admin" ? (
              <Link
                to="/admin"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Admin
              </Link>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                title="Login"
              >
                <UserIcon size={18} /> Login
              </button>
            )}
            {authed && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                title="Logout"
              >
                <LogOut size={18} /> Logout
              </button>
            )}

            {/* Get Started at the end/right */}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/40">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Login/Admin above Get Started */}
              {authed && role === "admin" ? (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Admin
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setAuthOpen(true);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-left w-full text-base font-medium text-foreground hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <UserIcon size={18} /> Login
                  </span>
                </button>
              )}
              {authed && (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-left w-full text-base font-medium text-foreground hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <LogOut size={18} /> Logout
                  </span>
                </button>
              )}
              {/* Get Started last */}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthed={() => {
          setAuthOpen(false);
          // Wait for state to update and token to be stored
          setTimeout(() => {
            const token = localStorage.getItem("authToken");
            if (token) {
              try {
                const payload = JSON.parse(atob(token.split(".")[1] || ""));
                if (payload?.role === "admin") {
                  // Use window.location to ensure full page navigation
                  window.location.href = "/admin";
                } else {
                  // Regular user - just refresh to update UI
                  window.location.reload();
                }
              } catch (error) {
                console.error("Token parsing error:", error);
                window.location.reload();
              }
            }
          }, 100);
        }}
      />
    </nav>
  );
}
