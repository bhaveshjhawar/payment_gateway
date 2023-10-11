import ComingSoonBody from "@/components/comingSoon/ComingSoonBody";

export default function ComingSoon() {
  return (
    <>
      {/* Coming Soon Body section */}
      <ComingSoonBody />
    </>
  );
}

ComingSoon.getLayout = function getLayout(page) {
  return <>{page}</>;
};
