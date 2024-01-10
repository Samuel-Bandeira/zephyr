import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "O usuário deve ter pelo menos 2 caracteres.",
  }),
  password: z.string().min(2, {
    message: "A senha deve ter pelo menos 2 caracteres.",
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
