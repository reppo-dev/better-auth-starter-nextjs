"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <Button onClick={handleLogout}>
      Logout <LogOut className="size-4" />
    </Button>
  );
};

export default Logout;
