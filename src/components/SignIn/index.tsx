"use client";
import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import signin from "@/app/auth/signin/page";

export const SignIn = () => {
  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <div className="mb-2">
        <Label htmlFor="email1" value="Email" />
        <TextInput id="email1" placeholder="nome@mail.com" required type="email" className="input" />
      </div>
      <div className="mb-2">
        <Label htmlFor="password1" value="Senha" />
        <TextInput id="password1" required type="password" className="input" />
      </div>
      <div className="flex items-center mb-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="ml-2 text-xs">
          Lembrar de mim
        </Label>
      </div>
      <Button type="button" onClick={() => signin("google")} color="light" className="btn">
        Entrar
      </Button>
      <Link href={"/"} className="text-xs text-blue-500 block mt-1">
        Esqueci a senha
      </Link>
      <p className="text-xs mt-2">
        Não possui conta?{" "}
        <Link href={""} className="text-blue-500">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
};
