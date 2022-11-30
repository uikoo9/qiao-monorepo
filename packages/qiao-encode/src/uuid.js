// uuid
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';

/**
 * uuid
 * 	type	1,3,4,5,default:4
 */
export const uuid = (type) => {
  // type
  type = type || 4;

  // 1
  if (type == 1) {
    return uuidv1();
  }

  // 3
  if (type == 3) {
    return uuidv3('insistime.com', uuidv3.DNS);
  }

  // 4
  if (type == 4) {
    return uuidv4();
  }

  // 5
  if (type == 5) {
    return uuidv5('insistime.com', uuidv5.DNS);
  }
};
