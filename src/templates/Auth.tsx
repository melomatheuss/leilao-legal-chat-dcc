import Image from "next/image";
import React from "react";

type AuthProps = {
  children: React.ReactNode;
};

const Auth = ({ children }: AuthProps) => {
  return (
    <div
      className="flex w-max h-screen items-center justify-center"
      style={{ background: "linear-gradient(120deg, #3498db, #207bcc)" }}
    >
      <main className="flex flex-col max-h-32 bg-white rounded p-4 shadow-lg">
        <Image width={175} height={75} src={"/logo-leilao-legal.png"} alt="Leilão Legal" />
        {children}
      </main>
    </div>
  );
};

export default Auth;
