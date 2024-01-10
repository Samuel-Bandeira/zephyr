import IGetAllWindTurbines from "@/lib/application/usecases/IGetAllWindTurbines";
import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const getAllHives = diContainer.get<IGetAllWindTurbines>(
    TYPES.IGetAllWindTurbines
  );

  let hives = await getAllHives.execute();

  return Response.json(hives);
}
