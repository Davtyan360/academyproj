import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";

import firebaseAdminConfig from "../../config/firebase.config";

@Injectable()
export class FirebaseService {
  configure(): void {
    admin.initializeApp({
      credential: admin.credential.cert(
        firebaseAdminConfig.serviceAccount as admin.ServiceAccount
      ),
    });
  }
}
