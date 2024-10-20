function Header({ category }) {
  return (
    <header className="app-header">
      <img src={`img/${category}.png`} alt={`${category} logo`} />
      <h1>The {category} Quiz</h1>
    </header>
  );
}

export default Header;
