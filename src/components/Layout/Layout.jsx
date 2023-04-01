import { Outlet } from 'react-router-dom';
import { Link, Header, Container, Logo } from './Layout.style';

export default function Layout() {
  return (
    <>
      <Container>
        <Header>
          <div>
            <span role="img" aria-label="computer icon">
              🎬
            </span>
            <Logo>Fantastic movies search</Logo>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
}
