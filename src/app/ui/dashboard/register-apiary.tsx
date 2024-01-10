"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createApiary } from "@/actions/apiary";
import { Input } from "@/components/ui/input";
import { formSchema, formSchemaType } from "@/schemas/apiary";
import { useForm } from "react-hook-form";
import { PlusIcon } from "@radix-ui/react-icons";
import { DialogClose } from "@radix-ui/react-dialog";

const RegisterApiary = ({ disabled, ...props }: any) => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      latitude: 0,
      longitude: 0,
    },
  });

  const onSubmit = async (values: formSchemaType) => {
    try {
      await createApiary(values);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild {...props}>
        <Button
          className="bg-blue-600 hover:bg-blue-700 hover:text-white font-medium"
          disabled={disabled}
        >
          <PlusIcon className="mb-1 mr-1" />
          Fazenda
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader>
          <DialogTitle className="flex items-center border-b pl-4 h-[50px]">
            Adicionar Fazenda
          </DialogTitle>
        </DialogHeader>
        <div className="pt-0 px-5 pb-6 border-b">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </div>
        <DialogFooter className="px-5 pb-5">
          <Button
            className="bg-blue-600 hover:bg-blue-700 hover:text-white font-medium"
            onClick={form.handleSubmit(onSubmit)}
          >
            Adicionar
          </Button>
          <DialogClose asChild>
            <Button>Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterApiary;
