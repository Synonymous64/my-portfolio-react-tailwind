import { AiFillGithub } from 'react-icons/ai';
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a href="https://www.linkedin.com/in/prajwal-urkude-8a1b6818b"
                className="hover:opacity-50 transition duration-500"
                rel="noreferrer"
                target="_blank"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a href="https://github.com/Synonymous64"
                className="hover:opacity-50 transition duration-500"
                rel="noreferrer"
                target="_blank"
            >
                <AiFillGithub style={{width: "40px", height: "35px"}}/>
            </a>
            <a href="https://www.facebook.com/prajwal.urkude.37/"
                className="hover:opacity-50 transition duration-500"
                rel="noreferrer"
                target="_blank"
            >
                <img alt="linkedin-link" src="../assets/facebook.png" />
            </a>
            <a href="https://www.instagram.com/praj_in_metaverse/"
                className="hover:opacity-50 transition duration-500"
                rel="noreferrer"
                target="_blank"
            >
                <img alt="linkedin-link" src="../assets/instagram.png" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;