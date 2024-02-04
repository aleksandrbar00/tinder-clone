import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type TFormState = {
  name: string;
  email: string;
  age: number;
};

const defaultValues: TFormState = {
  name: '',
  email: '',
  age: 18,
};

export const RegistrationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  function onSubmit(values: TFormState) {
    console.log('submit', values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Имя</FormLabel>
        <Input id="name" placeholder="Полное имя" {...register('name')} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={!!errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="Email" {...register('email')} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={!!errors.age}>
        <FormLabel htmlFor="age">Возраст</FormLabel>
        <Input id="age" placeholder="Возраст" {...register('age')} />
        <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage>
      </FormControl>

      <Button mt={12} width="100%" isLoading={isSubmitting} type="submit">
        Создать аккаунт
      </Button>
    </form>
  );
};
