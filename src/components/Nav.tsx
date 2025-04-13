import styled from "styled-components";
import { useAuthStore } from "../stores/auth";

function getTimeGreeting(name: string) {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour < 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 17 && hour < 22) {
    return `Good night, ${name}!`;
  } else {
    return `Up so late, ${name}?`;
  }
}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .logo {
    font-size: 1.125rem;
  }

  .logout {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }

  .logout .icon {
    color: var(--burnt-sienna);
  }
`;

export function Nav() {
  const authStore = useAuthStore();

  return (
    <NavContainer className="box lifted">
      <div className="logo">BudgetBuddy</div>
      <div className="logout">
        {authStore.isLoggedIn && (
          <>
            <span>{getTimeGreeting(authStore.name)}</span>
            <span className="icon material-symbols-rounded">logout</span>
          </>
        )}
      </div>
    </NavContainer>
  );
}
