import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(4),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
});

export type formSchemaType = z.infer<typeof formSchema>;
