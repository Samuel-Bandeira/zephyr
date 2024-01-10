"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, formSchemaType } from "@/schemas/login";
import { cn } from "@/lib/utils";
import { GiPaperWindmill } from "react-icons/gi";
export default function Home() {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: formSchemaType) {
    console.log(values);
  }

  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-blue-600" />
          <div className="relative z-20 flex items-center text-lg font-medium space-x-1">
            <GiPaperWindmill size={24} />
            <p className="mt-1">Zephyr</p>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;My favorite things in life don't cost any money. It's
                really clear that the most precious resource we all have is
                time.&rdquo;
              </p>
              <footer className="text-sm">Steve Jobs</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Criar uma conta
              </h1>
              <p className="text-sm text-muted-foreground">Faça login abaixo</p>
            </div>
            <div className={cn("grid gap-6")}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="nome@dominio.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="Senha"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* TODO disabled={form.formState.isSubmitting}  */}
                  {/* TODO spinner when submitting */}
                  <Button type="submit" className="w-full" asChild>
                    <Link href={"/overview"}>Entrar</Link>
                  </Button>
                </form>
              </Form>
              {/* <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      E-mail
                      <Input
                        id="email"
                        placeholder="nome@dominio.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2 space-y-4">
                    <div className="grid gap-1">
                      Senha
                      <Input
                        id="email"
                        placeholder="Seu código de acesso"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </div>
                    <Button>Entrar</Button>
                  </div>
                </div>
              </form> */}
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com nossos{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de serviço
              </Link>{" "}
              e{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <Form {...form}>
    //     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    //       <FormField
    //         control={form.control}
    //         name="username"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Usuário</FormLabel>
    //             <FormControl>
    //               <Input {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //       <FormField
    //         control={form.control}
    //         name="password"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Senha</FormLabel>
    //             <FormControl>
    //               <Input type="password" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //       {/* TODO disabled={form.formState.isSubmitting}  */}
    //       {/* TODO spinner when submitting */}
    //       <Button type="submit" className="w-full" asChild>
    //         <Link href={"/overview"}>Entar</Link>
    //       </Button>
    //     </form>
    //   </Form>
    // </main>
  );
}
