import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";

interface Props {
  activeMenu: boolean;
  onNavChange: () => void;
}

export const MobileMenu = ({ activeMenu, onNavChange }: Props) => {
  return (
    <motion.div
      className="w-full h-[calc(100vh - 96px)] bg-background absolute top-24"
      variants={menu}
      animate={activeMenu ? "open" : "closed"}
      initial="closed"
    >
      <AnimatePresence>
        {activeMenu && <Nav onNavChange={onNavChange} />}
      </AnimatePresence>
    </motion.div>
  );
};

const menu = {
  open: {
    width: "100%",
    height: "calc(100vh - 96px)",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: "0px",
    width: "100%",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
