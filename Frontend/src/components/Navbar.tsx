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
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("authUser");
    setAuthed(!!token);
    try {
      if (userStr) {
        const u = JSON.parse(userStr);
        setUserName(u?.name || u?.email || null);
        setRole(u?.role || null);
      } else if (token) {
        const payload = JSON.parse(atob(token.split(".")[1] || ""));
        setRole(payload?.role || null);
        setUserName(payload?.email || null);
      } else {
        setRole(null);
        setUserName(null);
      }
    } catch {
      setRole(null);
      setUserName(null);
    }
  }, [location.pathname, authOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
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

            {/* Get Started first at the end section */}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>

            {/* Then auth area: show name if logged, else Login button */}
            {authed ? (
              <span className="text-sm font-medium text-foreground">
                {userName}
              </span>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                title="Login"
              >
                <UserIcon size={18} /> Login
              </button>
            )}

            {/* Logout shown only if logged */}
            {authed && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                title="Logout"
              >
                <LogOut size={18} /> Logout
              </button>
            )}

            {/* Admin link if admin */}
            {authed && role === "admin" && (
              <Link
                to="/admin"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Admin
              </Link>
            )}
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

              {/* Get Started */}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>

              {/* Auth area */}
              {authed ? (
                <div className="px-3 py-2 text-base font-medium text-foreground">
                  {userName}
                </div>
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

              {authed && role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthed={() => {
          setAuthOpen(false);
          const userStr = localStorage.getItem("authUser");
          if (userStr) {
            try {
              const u = JSON.parse(userStr);
              if (u?.role === "admin") {
                window.location.href = "/admin";
              }
            } catch {}
          }
        }}
      />
    </nav>
  );
}
