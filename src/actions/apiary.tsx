"use server";

import ICreateFarm from "@/lib/application/usecases/ICreateFarm";
import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";
import { formSchemaType } from "@/schemas/apiary";

export async function createApiary(values: formSchemaType) {
  const CreateApiary = diContainer.get<ICreateFarm>(TYPES.ICreateFarm);
  console.log(await CreateApiary.execute(values));
}
