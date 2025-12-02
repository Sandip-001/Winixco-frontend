"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

type Profile = {
  id: string;
  full_name: string;
  role: string,
  email: string;
  avatar_url?: string;
};


type AuthContextType = {
  user: Profile | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  openLoginModal: boolean;
  setOpenLoginModal: (open: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DUMMY_USER = {
  id: "1",
  full_name: "John Doe",
  email: "john@gmail.com",
  role: "User",
  password: "123456",
  avatar_url: "https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const protectedRoutes = ["/dashboard", "/applied-jobs", "/settings"];

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  // Redirect unauthorized users away from protected pages
  useEffect(() => {
    if (!loading && !user && protectedRoutes.some((r) => pathname.startsWith(r))) {
      router.push("/");
      toast.error("Please login to access the dashboard");
    }
  }, [user, pathname, loading]);

  const login = (email: string, password: string) => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      const { password, ...userData } = DUMMY_USER;
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      toast.success("Login Successful ✅");
      setOpenLoginModal(false);
      router.push("/dashboard");
    } else {
      toast.error("❌ Wrong email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, openLoginModal, setOpenLoginModal }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
