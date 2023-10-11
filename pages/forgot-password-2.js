import ForgotPasswordBody from "@/components/forgotPasswordTwo/ForgotPasswordBody";

export default function ForgotPassword2() {
  return (
    <>
      {/* Forgot Password Body section */}
      <ForgotPasswordBody />
    </>
  );
}

ForgotPassword2.getLayout = function getLayout(page) {
  return <>{page}</>;
};
