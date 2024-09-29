/* About.jsx
Hans-Randy Masamba
301378248
2024-09-28 */

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Over the years, I’ve had the opportunity to work with clients from
            various industries, gaining valuable insights and honing my skills.
            With proficiency in .NET, React, abd Node, I’m confident in
            delivering the best results for any project.
          </p>
          <div className="flex justify-center">
            <a
              href="src/assets/Hans-Randy_Masamba_Modified_CV.pdf"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Download My Resume
            </a>
            <a
              href="https://github.com/Hans-Randy"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Github Repository
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="src/images/me.jpg"
          />
        </div>
      </div>
    </section>
  );
}
