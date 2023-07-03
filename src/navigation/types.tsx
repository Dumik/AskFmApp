export enum Screens {
  Starting = 'Starting',
  TodoScreen = 'TodoScreen',
  Tabs = 'Tabs',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Home = 'Home',
  Profile = 'Profile',
  Friends = 'Friends',
  Questions = 'Questions',
}

export type RootStackParamList = {
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Starting]: undefined;
  [Screens.Tabs]: undefined;
  // [Screens.Welcome]: undefined;
  // [Screens.SignIn]: { fromAppointment?: boolean } | undefined;
  // [Screens.SignUpStep1]: undefined;
  // [Screens.SignUpStep2]: { userSerialized: UserSignUpTypeSteps };
  // [Screens.ResetPassword]: undefined;
  // [Screens.ResetPasswordConfirm]: undefined;
  // [Screens.ContactInfo]: undefined;
  // [Screens.WelcomeLogIn]: undefined;
  // [Screens.ConfirmEmail]: { userSerialized: UserSignUpTypeSteps };
  // [Screens.SignUpAddressUser]: undefined;
  // [Screens.CreateNewPassword]: QueryStringType;
};
