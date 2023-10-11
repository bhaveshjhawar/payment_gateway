import Link from "next/link";

const CollapseOneItemThreeTab = ({ id = "collapseOneItemThree" }) => {
  return (
    <div
      className="tab-pane fade"
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      <h2 className="title">Updates</h2>
      <ul className="body-content">
        <li>
          <Link href="/help-center-details">
            How do I verify my email with Paylio?
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How to enable location sharing on my browser?
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How do I verify my identity with Paylio via my Facebook profile?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            What address verification documents do you accept?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How do I verify my credit or debit card with Paylio?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            What identity verification documents do you accept?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How do I verify my bank account?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            What do I need to open an account with Paylio?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            Why were my documents rejected?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            I need to complete additional verification to pay online. What
            should I do?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How to re-enable webcam sharing in my browser?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            Do I need to verify my identity?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">What is verification? </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            I can&#39;t verify my email. What should I do?{" "}
          </Link>
        </li>
        <li>
          <Link href="/help-center-details">
            How to verify my account and increase my limits?{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CollapseOneItemThreeTab;
