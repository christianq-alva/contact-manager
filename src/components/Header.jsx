export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <h3>Contact Manager</h3>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/favorites">Favorites</a></li>
        </ul>
      </nav>
    </header>
  );
}