import ResetPasswordBody from "@/components/resetPassword/ResetPasswordBody";

export default function ResetPassword() {
  return <ResetPasswordBody />;
}

ResetPassword.getLayout = function getLayout(page) {
  return <>{page}</>;
};
