import LoginBody from "@/components/login/LoginBody";

export default function Login() {
  return (
    <>
      {/* Bann Login Body section */}
      <LoginBody />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
