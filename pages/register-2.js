import RegisterTwoBody from "@/components/registerTwo/RegisterTwoBody";

export default function RegisterTwo() {
  return <RegisterTwoBody />;
}

RegisterTwo.getLayout = function getLayout(page) {
  return <>{page}</>;
};
