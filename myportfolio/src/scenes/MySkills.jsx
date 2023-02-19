import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const MySkills = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const techs = [
        {
            id: 1,
            src: "../assets/javascript.png",
            title: "Javascript",
            style: "shadow-yellow"
        },
        {
            id: 2,
            src: "../assets/react.png",
            title: "React JS",
            style: "shadow-blue"
        },
        {
            id: 3,
            src: "../assets/tailwind.png",
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 4,
            src: "../assets/nextjs.png",
            title: "NEXT JS",
            style: "shadow-white"
        },
        {
            id: 5,
            src: "../assets/github.png",
            title: "GITHUB",
            style: "shadow-gray-400"
        },
        {
            id: 6,
            src: "../assets/bootstrap.png",
            title: "Bootstrap",
            style: "shadow-pink-300"
        },
        {
            id: 7,
            src: "../assets/gatsby.png",
            title: "GATSBY",
            style: "shadow-pink-500"
        },
        {
            id: 8,
            src: "../assets/sanityio.Default",
            title: "SANITY",
            style: "shadow-red"
        },
        {
            id: 9,
            src: "../assets/mysql.png",
            title: "MYSQL",
            style: "shadow-gray-500"
        },
        {
            id: 10,
            src: "../assets/node-js.png",
            title: "NODE JS",
            style: "shadow-green-500"
        },
        {
            id: 11,
            src: "../assets/c-.png",
            title: "C++",
            style: "shadow-blue"
        },
        {
            id: 12,
            src: "../assets/java.png",
            title: "JAVA",
            style: "shadow-blue"
        },
    ]
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and Image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        Progression and sustainable growth is my true asset within me, desire to procure and acquire distinct knowledge with a motive to chase Excellence.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreen ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Experience
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Built Projects on various technologies including React, Nodejs, React-Native, MongoDB and Sanity on backend extensively.
                        Did my internship in IT-NETWORKZ as saleforce intern.
                        I would aim to prove that I am an experienced and valuable candidate for the software developer role.
                    </p>
                </motion.div>

                {/* INOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Inovative
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I aim to convey my enthusiasm for innovation and my passion for using technology to solve problems in creative and effective ways. I always look for new ways to improve and innovate.
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">
                                Creative
                            </p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Demonstrating my Creativity through this portfolio. You will find me bringing new ideas and insights to the table.I focus on demonstrating my enthusiasm, passion, and creativity for software development through tangible examples and thoughtful questions
                    </p>
                </motion.div>
            </div>
            <div className="mt-28 bg-gradient-to-b to-black h-screen">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                        <div>
                            <p className="font-playfair font-semibold text-4xl mb-5">
                                <span className="text-red">TECHNOLOGIES</span>
                            </p>
                            <LineGradient width="w-1/3" />
                            <p className="py-6 text-red">These are the technologies I've worked with</p>
                        </div>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                            {
                                techs.map(({ id, src, title, style }) => (
                                    <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} key={id}>
                                        <img src={src} alt={`${src}.png`} className="w-20 mx-auto" />
                                        <p className="mt-4">{title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;