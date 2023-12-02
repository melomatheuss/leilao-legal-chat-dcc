"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <Image width={175} height={75} src={"/logo-leilao-legal.png"} alt="Leilão Legal" />
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <Link href={'/auth/signup'}>
            <Button color="purple">Cadastre-se</Button>
          </Link>
          <Link href={"/auth/signin"}>
            <Button color="purple">Entrar</Button>
          </Link>
        </div>
      </Navbar>
      <menu className="flex bg-purple-700 h-10 justify-center items-center gap-6">
        <Link href={""} className="text-white">
          Home
        </Link>
        <Link href={""} className="text-white">
          Leilões Arrematados
        </Link>
        <Link href={""} className="text-white">
          Perguntas Frequentes
        </Link>
        <Link href={""} className="text-white">
          Depoimentos
        </Link>
        <Link href={""} className="text-white">
          Comprar Lances
        </Link>
      </menu>
    </header>
  );
};
