import {Text} from 'react-native';
import React, {FC} from 'react';
import {useForm, Controller} from 'react-hook-form';

import {Screens, RootStackParamList} from '../navigation';
import {Box, Button, Input, ScrollView, Logo, TextError} from '../legos';

//@ts-ignore
export const SignInScreen: FC<RootStackParamList> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: {email: string; password: string}) => {
    navigation.navigate(Screens.Tabs);
    console.log(data);
  };

  //TODO: Add yup validations
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              // <Input
              //   onChange={onChange}
              //   value={value}
              //   placeholder="Email"
              //   keyboardType="email-address"
              // />
              <Input
                // label="Email"
                value={value}
                textContentType="emailAddress"
                onChangeText={onChange}
                // error={(touched.email && errors?.email) || ''}
                type="outline"
              />
            )}
            name="email"
          />
          {errors.email ? (
            <TextError text="This is required!" />
          ) : (
            <Box height={16} />
          )}
          <Box height={6} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Box height={40}>
                <Input
                  label="Email"
                  value={value}
                  textContentType="emailAddress"
                  onChangeText={onChange}
                  // error={(touched.email && errors?.email) || ''}
                  // type="outline"
                />
              </Box>
            )}
            name="password"
          />
          {errors.password ? (
            <TextError text="This is required!" />
          ) : (
            <Box height={16} />
          )}

          <Box height={6} />

          <Button
            onPress={handleSubmit(onSubmit)}
            title="Login"
            bgColor="btnLime"
            width={300}
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingVertical={16}
          width={300}>
          <Text style={{marginRight: 4, color: 'white'}}>
            Don`t you have an account?
          </Text>
          <Button
            onPress={() => navigation.navigate(Screens.SignUp)}
            title="Create account"
            bgColor="btnLime"
            type="text"
            textDecorationLine="underline"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
