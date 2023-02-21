import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/ludiemert.png"
          alt="User Photo"
        />

        <div>
          <span>Welcome!</span>
          <strong>Luciana Diemert</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}