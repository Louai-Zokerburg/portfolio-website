import { TCertificate } from "@/types";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const CertificateCard = ({ certificate }: { certificate: TCertificate }) => {
  return (
    <Link
      href={certificate.credential_url}
      target="_blank"
      className="flex flex-col justify-center items-start gap-y-5 rounded-xl p-4 duration-300 hover:translate-y-[-8px]  bg-accent-color-light/60 hover:bg-accent-color-light dark:bg-accent-color-dark/60 dark:hover:bg-accent-color-dark"
    >
      <div className="w-full flex justify-between items-center">
        <PiCertificateBold size={48} color="#CB76FF" />
        <FaLink size={18} />
      </div>

      <h3 className="text-lg lg:text-xl ">From {certificate.from}</h3>
      <div>
        <p className="text-xs lg:text-sm">I have Successfully Completed</p>
        <h3 className="text-base lg:text-lg ">{certificate.title}</h3>
      </div>
      <div>
        <p className="text-xs lg:text-sm">On</p>
        <p className="text-sm lg:text-base">{certificate.date}</p>
      </div>
    </Link>
  );
};

export default CertificateCard;
