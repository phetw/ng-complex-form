import { Address } from './address.model';
import { PersonalInfo } from './personal-info.model';

export interface Person {
  personalInfo: PersonalInfo;
  address: Address;
}
