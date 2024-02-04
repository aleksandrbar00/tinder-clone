import { RegistrationForm } from '~/lib/components/RegistrationForm/RegistrationForm';
import { CardLayout } from '~/lib/layout/CardLayout';

export const RegistrationPage = () => {
  return (
    <CardLayout title="Создайте аккаунт" showSideBar={false}>
      <RegistrationForm />
    </CardLayout>
  );
};
