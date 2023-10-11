import RegisterBody from "@/components/register/RegisterBody";

export default function Register() {
  return <RegisterBody />;
}

Register.getLayout = function getLayout(page) {
  return <>{page}</>;
};
