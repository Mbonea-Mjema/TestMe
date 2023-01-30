import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <div className="absolute top-[42vh]  bottom-[42vh] left-[45vw] right-[45vw]">
        <motion.div
          className="w-fit h-fit"
          // initial={{ transformOrigin: "top" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, repeatDelay: 0 }}
        >
          <Image
            alt="logo "
            className=" origin-center rotate-45 transition-all"
            src="/svg/logo.svg"
            height={100}
            width={100}
          />
        </motion.div>
      </div>
    </>
  );
}
