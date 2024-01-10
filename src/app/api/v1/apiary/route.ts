import IGetAllFarms from "@/lib/application/usecases/IGetAllFarms";

import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const getAllApiaries = diContainer.get<IGetAllFarms>(TYPES.IGetAllFarms);

  let apiaries = await getAllApiaries.execute();

  return Response.json(apiaries);
}
