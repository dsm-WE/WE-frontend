import { signUpRequestDataModel } from 'models/signUp';
import { RecoilState, atom } from 'recoil';

export const signUpRequestDataRecoil: RecoilState<signUpRequestDataModel> =
  atom({
    key: 'signUpRequestDataRecoil' + Date.now(),
    default: {
      name: '',
      email: '',
      password: '',
      code: '',
      introduction: '',
    },
  });
