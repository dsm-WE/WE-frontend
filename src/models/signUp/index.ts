export interface signUpRequestDataModel {
  name: string;
  email: string;
  password: string;
  code: string;
  introduction: string;
}

export interface codeCheckReqModel {
  email: string;
  code: string;
}
