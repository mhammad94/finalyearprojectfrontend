export function stringToUUID(inputString:string){
  if (inputString.length !== 36) {
      throw new Error('Invalid UUID string length');
    }

    return `${inputString.substr(0, 8)}-${inputString.substr(8, 4)}-${inputString.substr(12, 4)}-${inputString.substr(16, 4)}-${inputString.substr(20)}`;
}
