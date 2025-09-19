import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Glasses =() =>{
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Animates every time it comes into view
    threshold: 0.2,     // Animation triggers when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 }, // Adjust speed if needed
      });
    } else {
      controls.start({
        opacity: 0,
        x: inView ? 0 : -100, // Reset when out of view
      });
    }
  }, [controls, inView]);
  return(
    <>
     <section id="feature" ref={ref}>
    <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 md:space-y-0 items-center  justify-center pb-20 bg-slate-300 ">
     
     <motion.div
      className="flex flex-col items-center space-y-2 mt-8 rounded-md shadow-2xl shadow-purple-400 py-4 px-4 md:auto bg-white border-purple-400 border-2 mb-8"
      initial={{ opacity: 0, x: 100 }} 
      animate={controls}
      >
            <div className="flex items-center justify-center ">
              <img src="/images/Jarawa/ja1.jpeg" alt="" className="h-50 w-100"/>
            </div>
            <h3 className="text-xl font-bold"> The Jarawa tribe</h3>
            <p className="max-w-md">
            The Afizere, also known as the Jarawa, are an ethnic group in Plateau State, Nigeria, living in areas like Jos East, Jos North, parts of Jos South, and Mangu Local Government Areas.

            </p>
            <Link to="/services"><button className="p-2  font-bold text-white rounded-full w-40 bg-black hover:scale-95">
              Find out more
          
        </button></Link>
          </motion.div>
          <motion.div 
          className="flex flex-col items-center space-y-2 mt-8 rounded-md py-4 px-4 shadow-2xl shadow-purple-400 border-purple-400 border-2 bg-white mb-8"
          initial={{ opacity: 0, x: 100 }} 
          animate={controls}
          >
           
            <div className="flex items-center justify-center  ">
              <img src="/images/nwaghavul/nwa6.jpeg" alt="" className="h-50 w-100"/>
            </div>
            <h3 className="text-xl font-bold"> The Nwaghavul tribe</h3>
            <p className="max-w-md">
              The Mwaghavul are an ethnic group in Plateau State, Nigeria, primarily found in the Mangu Local Government Area. Known for their rich culture, farming, and a strong sense of community, the Mwaghavul people have a unique identity
            </p>
            <Link to="/services"> <button className="p-2 font-bold text-white rounded-full w-40 bg-black hover:scale-95">
          Find out more
        </button> </Link>
          </motion.div>

    </div>
    </section>
    </>
  )
}
export default Glasses;