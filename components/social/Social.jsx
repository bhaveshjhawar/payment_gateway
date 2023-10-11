import Image from "next/image";
import Link from "next/link";

const Social = ({ items = [] }) => {
  return (
    <>
      {items?.map(([item, url], i) => (
        <li key={i}>
          <Link href={url}>
            <Image src={item} alt="icon" />
          </Link>
        </li>
      ))}
    </>
  );
};

export default Social;
