import Link from "next/link";

function Block() {
  return (
    <div
      className="bg-white inline-block h-full ml-2 mr-2 align-middle"
      style={{
        width: '20%',
        height: '0.25rem'
      }}
    ></div>
  )
}

function AboutMe() {
  return (
    <div className="h-full">
      <div className="text-4xl w-full text-center md:text-6xl pt-4 absolute">
        <Block />
        <span>About Me</span>
        <Block />
      </div>
      <div className="flex h-full items-center justify-center">
        <div><Link href='/'><a className="text-xl border-solid border-2 p-2 rounded-lg hover:bg-secondary transition-colors">GO BACK</a></Link></div>
      </div>
    </div>
  );
};

export default AboutMe;
