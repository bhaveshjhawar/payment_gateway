import ForgotPasswordBody from "@/components/forgotPassword/ForgotPasswordBody";

export default function ForgotPassword() {
  return (
    <>
      {/* Forgot Password Body section */}
      <ForgotPasswordBody />
    </>
  );
}

ForgotPassword.getLayout = function getLayout(page) {
  return <>{page}</>;
};
