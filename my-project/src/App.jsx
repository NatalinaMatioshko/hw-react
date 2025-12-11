// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import bg from "./assets/bg.jpg";
import "./App.css";
import Counter from "./components/Counter";
import List from "./components/List";
import Mailbox from "./components/MailBox";
import UserName from "./components/UserName";

const App = () => {
  const userSkills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center w-full text-zinc-300 bg-black/50 bg-blend-overlay ">
        <h1 className="text-red-400">Movies App</h1>
        <List />
        <Mailbox name="Natalie" unreadMessages={[1, 2, 6]} />
        <Counter />
        <UserName />
        <ul className="mt-5">
          {userSkills.map((skill, index) => (
            <li className="text-[oklch(66.7%_0.295_322.15)]" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div> */}
    </>
  );
};

export default App;
