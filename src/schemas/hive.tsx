import * as z from "zod";

export const formSchema = z.object({
  apiaryId: z.coerce.string(),
  name: z.coerce.string().min(2),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
});

export type formSchemaType = z.infer<typeof formSchema>;
