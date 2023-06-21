import {Text} from 'react-native';
import React, {FC, Fragment} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Formik} from 'formik';

import {Screens, RootStackParamList} from '../navigation';
import {
  Box,
  Button,
  Input,
  ScrollView,
  Logo,
  TextError,
  Select,
} from '../legos';

type BodyType = {
  email: string | null | undefined;
  gander: string | null | undefined;
  password: string | null | undefined;
  username: string | null | undefined;
  fullName: string | null | undefined;
  birthday: string | null | undefined;
};

type FieldNameType =
  | 'email'
  | 'fullName'
  | 'username'
  | 'gender'
  | 'birthday'
  | 'password';

interface signUpFields {
  id: string;
  fieldName: FieldNameType;
  placeholder?: string;
  type?: string;
  component: string;
  label?: string;
  variant1?: string;
  variant2?: string;
}

const signUpFields: signUpFields[] = [
  {
    id: 'email-standard-required',
    fieldName: 'email',
    placeholder: 'Email',
    type: 'email-address',
    component: 'input',
  },
  {
    id: 'fullName-standard-required',
    fieldName: 'fullName',
    placeholder: 'Full Name',
    type: 'text',
    component: 'input',
  },
  {
    id: 'username-standard-required',
    fieldName: 'username',
    placeholder: 'Username',
    type: 'text',
    component: 'input',
  },

  {
    id: 'gender-standard-required',
    fieldName: 'gender',
    label: 'Gender',
    component: 'select',
    variant1: 'Male',
    variant2: 'Female',
  },

  {
    id: 'birthday-standard-required',
    fieldName: 'birthday',
    label: 'Birthday',
    type: 'date',
    component: 'input',
  },

  {
    id: 'standard-password-input',
    fieldName: 'password',
    placeholder: 'Password',
    type: 'password',
    component: 'input',
  },
];

const initialValuesForm = {
  email: 'test@test.com',
  fullName: '',
  username: '',
  gender: '',
  birthday: '',
  password: '',
};
// @ts-ignore
export const SignUpScreen: FC<RootStackParamList> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
  } = useForm();

  const onSubmit = (data: any) => {
    navigation.navigate(Screens.Tabs);
    console.log(data);
  };
  //TODO: Add yup validations

  const handlerSubmit = (values: any) => {
    console.log(
      '%c jordan values',
      'color: lime; font-weight: bold; font-size: 12px; text-transform: uppercase',
      values,
    );
  };

  return (
    <ScrollView backgroundColor="mainBlue">
      <Box
        alignItems="center"
        justifyContent="center"
        height="100%"
        backgroundColor="mainBlue"
        paddingTop={200}>
        <Box marginBottom={100}>
          <Logo color="white" />
        </Box>
        <Box>
          <Formik initialValues={initialValuesForm} onSubmit={handlerSubmit}>
            {({handleChange, values, handleSubmit, errors, touched}) => (
              <>
                {/* <Box flexDirection="row" justifyContent="space-between">
                  <Select
                    items={[{value: 'asda', label: 'asdasd'}]}
                    value={values.gender}
                    onChange={handleChange('gender')}
                    placeholder={{value: null, label: 'Year'}}
                    styleContainer={{
                      borderRadius: 0,
                      borderWidth: 0,
                      borderBottomWidth: 1,
                      marginBottom: 40,
                      marginLeft: 5,
                      flex: 1,
                    }}
                  />
                </Box> */}
                {/* <Select
                items={mockYears}
                value={values.expirationDateYear}
                onChange={handleChange('expirationDateYear')}
                placeholder={{ value: null, label: 'Year' }}
                styleContainer={{
                  borderRadius: 0,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  marginBottom: 40,
                  marginLeft: 5,
                  flex: 1,
                }}
              /> */}
                {signUpFields.map(({component, fieldName, label}) => {
                  return component === 'input' ? (
                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      marginBottom={20}
                      key={fieldName}>
                      <Box flex={1} marginRight={0} width={45}>
                        <Input
                          label="Email"
                          value={values[fieldName]}
                          // textContentType="emailAddress"
                          onChangeText={handleChange(fieldName)}
                          error={(touched.email && errors?.email) || ''}
                          type="outline"
                          secureTextEntry={fieldName === 'password'}
                        />
                      </Box>
                    </Box>
                  ) : component === 'select' ? (
                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      key={fieldName}>
                      <Select
                        type="outline"
                        items={[
                          {value: '1', label: 'male'},
                          {value: '2', label: 'Female'},
                        ]}
                        value={values[fieldName]}
                        onChange={handleChange(fieldName)}
                        placeholder={{value: null, label: label}}
                        styleContainer={{
                          borderRadius: 0,
                          borderWidth: 0,
                          borderBottomWidth: 1,
                          marginBottom: 40,
                          marginLeft: 5,
                          flex: 1,
                        }}
                      />
                    </Box>
                  ) : null;
                })}

                <Button
                  onPress={() => handleSubmit()}
                  title="Create account"
                  bgColor="btnBlue"
                  width={300}
                />
              </>
            )}
          </Formik>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingVertical={16}
          width={300}>
          <Text style={{marginRight: 8, color: 'white'}}>
            Do you have an account?
          </Text>
          <Button
            onPress={() => navigation.navigate(Screens.SignIn)}
            title="Login"
            type="text"
            textDecorationLine="underline"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
