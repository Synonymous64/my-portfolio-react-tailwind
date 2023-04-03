import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, liveLink, githubLink }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7 mx-3">
                    <span className="text-red mx-5 my-3 font-playfair hover:text-rose-700"><a href={liveLink} target="_blank" rel="noreferrer"> DEMO </a></span>
                    <span className="text-red hover:text-rose-700"><a href={githubLink} target="_blank" rel="noreferrer">GITHUB</a></span>
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Please have a look on my Live Projects.
                    Projects that best showcase my skills and experience,
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Blog Site" liveLink={"https://praj-blogs.vercel.app/"} githubLink={"https://github.com/Synonymous64/project-blog/tree/master/StarterFiles/web"} />
                    <Project title="Netflix Clone" liveLink={"https://bingjoy-movies.vercel.app/"} githubLink={"https://github.com/Synonymous64/mern-movie-app-2023"} />

                    {/* ROW 2 */}
                    <Project title="DALL-E CLONE" liveLink={"https://ai-image-generator-mern.vercel.app/"} githubLink={"https://github.com/Synonymous64/ai-image-generator-mern/tree/master/client"} />
                    <Project title="Metaverse-Product" liveLink={"https://metverse-product-website.vercel.app/"} githubLink={"https://github.com/Synonymous64/Product-Website-3D"} />
                    <Project title="Social Media APP" liveLink={"https://praj-social-app.netlify.app/"} githubLink={"https://github.com/Synonymous64/special-journey-reactJS/tree/master/Be-Social"} />

                    {/* ROW 3 */}
                    <Project title="Landing Page" liveLink={"https://royal-recipe-4467.on.fleek.co/"} githubLink={"https://github.com/Synonymous64/landing-page"} />
                    <Project title="Portfolio Site" liveLink={"https://my-portfolio-react-tailwind.vercel.app/"} githubLink={"https://github.com/Synonymous64/my-portfolio-react-tailwind/tree/master/myportfolio"} />
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;