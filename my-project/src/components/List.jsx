// import "../App";
const userSkills = ["HTML", "CSS", "JavaScript", "React"];

const List = () => {
  <>
    <ul className="mt-5">
      {userSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </>;
};

export default List;
