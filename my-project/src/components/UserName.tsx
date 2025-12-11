const userName: string = "Natalie";
const isLogged: boolean = true;
const isLogged2: boolean = false;
const userName2: null = null;

const UserName = () => {
  return (
    <>
      <section className="text-display">
        <p>Hello {userName}</p>
        <p>Number: {2 + 6}</p>
        <p>{userName.toUpperCase()}</p>
        <p>{new Date().toLocaleDateString()}</p>
        <p>{new Date().toLocaleTimeString()}</p>
        <br />
        <label className="text-teal-400" htmlFor="input_name">
          User name
        </label>
        <input className="bg-sky-300" type="text" id="input_name" required />
        {isLogged && <p>Hello {userName}</p>}
        {isLogged2 ? `Hello ${userName}` : `Please log in!`}
        {isLogged2 ? (
          <p>Hello {userName}</p>
        ) : (
          <button className="bg-orange-800">Log in</button>
        )}
        {userName2 !== null ? <p>Hello {userName}</p> : `Enter your name!`}
      </section>
    </>
  );
};

export default UserName;
