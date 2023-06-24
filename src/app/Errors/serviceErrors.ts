
export function getTranslatedServiceError(code: number, lang: string): any {
  const errorKey = ServiceErrors[code];
  if (errorKey) {
    const translatedMessage = WrongPassword[getLanguageCode(lang)];
    return translatedMessage ? translatedMessage : '';
  }
  else {
    return '';
  }
}

function getLanguageCode(lang: string) {
  switch (lang) {
    case 'en-Us': return 1;
    case 'az-Aze': return 2;
    case 'ru-Ru': return 3;
    default: return 0;
  }
}

const WrongPassword: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const UserNotFound: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const CouldNotAddPassword: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const CouldNotCreateUser: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const UserWithUserNameExists: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const UserWithPhoneNumberExists: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const SMSProviderException: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const SMSArgumentException: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const SMSWrongPhoneNumberException: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const WrongTypeException: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const CouldNotSendOTP: { [key: number]: string } = {
  1: '1',
  2: '2',
  3: '3',
}

const ServiceErrors: { [key: number]: { [key: string]: string } } = {
  103001: WrongPassword,
  103002: UserNotFound,
  103003: CouldNotAddPassword,
  103004: CouldNotCreateUser,
  103005: UserWithUserNameExists,
  103006: UserWithPhoneNumberExists,
  100001: SMSProviderException,
  100002: SMSArgumentException,
  100003: SMSWrongPhoneNumberException,
  100004: WrongTypeException,
  101001: CouldNotSendOTP
};

