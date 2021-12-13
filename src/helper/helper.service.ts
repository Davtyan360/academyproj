import { Injectable } from "@nestjs/common";

import { Device } from "src/device/device.interface";

@Injectable()
export class HelperService {
  makeDefaultUsername(firstName: string, lastName: string): string {
    return `${firstName}.${lastName}`.toLowerCase();
  }

  makeFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  extractTokensFromDevices(array: Device[]): string[] {
    return array.map(({ token }) => token);
  }
}
