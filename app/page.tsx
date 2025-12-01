import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-auto">
      <div className="flex items-center justify-center gap-4 w-full py-10">
        <Link href="/login">
          <Button>Login</Button>
        </Link>

        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
