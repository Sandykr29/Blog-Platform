import { motion } from "framer-motion";

const LandingSection = ({ image, text, flip }) => {
  return (
    <div className={`flex items-center justify-between gap-10 my-20 ${flip ? 'flex-row-reverse' : ''}`}>
      <motion.div
        className="w-1/2"
        initial={{ x: flip ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold">{text}</h2>
      </motion.div>

      <motion.div
        className="w-1/2 flex justify-center"
        initial={{ x: flip ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image}
          alt="Landing Image"
          className="rounded-lg shadow-lg max-h-[500px] w-auto"
        />
      </motion.div>
    </div>
  );
};

export default LandingSection;
