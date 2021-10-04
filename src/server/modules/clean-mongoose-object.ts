import { LeanDocument } from 'mongoose';

export default function cleanMongooseObject<T>(obj: LeanDocument<T>): T {
  const objToRedact = Object.assign({}, obj) as any;
  delete objToRedact._id;
  delete objToRedact.__v;
  objToRedact.id = String(objToRedact.id);

  return objToRedact as any;
}
