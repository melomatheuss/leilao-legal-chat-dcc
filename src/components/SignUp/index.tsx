"use client";
import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const SignUp = () => {
  return (
    <form className="max-w-md mx-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <TextInput id="name" required type="text" placeholder="Nome" />
          <TextInput id="mail" required type="email" placeholder="Email" />
          <TextInput id="confirmemail" required type="email" placeholder="Confirmar Email" />
          <TextInput id="cpf" required type="number" placeholder="CPF" />
        </div>

        <div className="flex flex-col gap-2">
          <TextInput id="password" required type="password" placeholder="Senha" />
          <TextInput id="confirmPassword" required type="password" placeholder="Confirmar Senha" />
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Li e aceito os termos de condição de uso.
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-xs">
              
            </Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Button type="submit" color="light">
          Criar conta
        </Button>
        <p className="text-xs text-center">
          Já possui cadastro? <Link href={"/"}>Entrar</Link>
        </p>
      </div>
    </form>
  );
};
