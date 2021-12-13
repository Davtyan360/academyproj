import { CreateTripDTO } from "./create.trip.dto";
// TODO fields of update need to be fixed
export interface PatchTripDto extends Partial<CreateTripDTO> {}
