export default function AboutSection() {
    const hoverWrapper = (sentence: string) => {
        return sentence.split(/(\s+|(?=\W))/).map((part, idx) => {
            if (part.trim() === '') {
                return part;
            }
            return (
                <span key={idx} className="hover:text-mono transition duration-200">
                    {part}
                </span>
            )
        })
    }

    return (
        <div id="about" className="flex flex-col justify-center min-h-screen px-5 md:px-[137px] gap-2 md:gap-5">
            <div>
                <p className="text-mono hover:text-white md:text-xl">
                    &lt;&nbsp;About&nbsp; &nbsp; &gt;
                </p>
            </div>
            <div className="text-white px-[6px] text-sm flex flex-col gap-5">
                <p>
                    {hoverWrapper("Hello! My name is Rahadian Nirwan Zulfikar. I'm a web developer from Bandung, Indonesia. Despite being relatively new to the field, I've quickly gained hands-on experience in both front-end and back-end web development, delivering a variety of websites and projects that showcase my technical skills and creativity. My journey so far has been marked by a passion for crafting responsive, user-focused web applications while constantly pushing myself to learn and grow with each project.")}
                </p>
                <p>
                    {hoverWrapper("I have a proven ability to maintain web applications and ensure they perform optimally across different devices and platforms. Whether collaborating with UI/UX teams to enhance the visual and functional appeal of a site or independently designing a sleek and efficient user interface, I pride myself on producing work that blends aesthetics with seamless functionality. By staying on top of industry trends and integrating the latest technologies into my work, I aim to deliver websites that stand out in terms of both performance and user experience.")}
                </p>
                <p>
                    {hoverWrapper("As someone who thrives on learning, I'm constantly seeking new opportunities to enhance my skills and grow as a developer. My ability to learn quickly and adapt to new challenges has allowed me to make significant strides in a short amount of time, and I am eager to continue improving. Whether refining my coding techniques or finding innovative solutions to complex problems, I'm passionate about delivering web applications that meet the needs of both users and clients while also pushing the boundaries of my own capabilities.")}
                </p>
                <p>
                    {hoverWrapper("In a world where technology is ever-evolving, I'm not just keeping up—I'm ready to set the pace. Let's build something extraordinary together.")}
                </p>
            </div>
            {/* <div className='flex flex-col md:flex-row gap-3'>
                <img src={img1} alt='foto' className='w-[20%] h-[45%] max-md:hidden object-cover' />
            </div> */}
        </div>
    )
}
