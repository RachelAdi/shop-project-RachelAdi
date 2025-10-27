import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import WindowSizeDisplay from "./components/WindowSizeDisplay/WindowSizeDisplay";
export default function Home() {
  return (
    <main>
      <WindowSizeDisplay />
      <RegistrationForm />
    </main>
  );
}
