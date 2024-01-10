"use server";

import ICreateWindTurbine from "@/lib/application/usecases/ICreateWindTurbine";
import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";
import { formSchemaType } from "@/schemas/hive";

export async function createHive(values: formSchemaType) {
  const CreateHive = diContainer.get<ICreateWindTurbine>(
    TYPES.ICreateWindTurbine
  );
  console.log(
    await CreateHive.execute({ ...values, apiaryId: values.apiaryId })
  );
}
