function Header() {
  const sectionTitle = "React JS from Beetroot";

  return (
    <>
      <header className="header">
        <h1 className="title title_1">{sectionTitle}</h1>
      </header>
    </>
  );
}

const domContainer = document.querySelector(".header");
const root = ReactDOM.createRoot(domContainer);

root.render(<Header />);
