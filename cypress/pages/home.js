import BasePage from './base';
import MainPage from './main';

export default function HomePage(driver) {
  const mainPage = MainPage(driver);
  // Attrs
  const usernameInput = () => {
    return driver.findByRole('textbox', {name: /Correo electrónico/i});
  };

  const passwordInput = () => {
    return driver.findByText('Contraseña');
  };

  const ingresarBtn = () => {
    return driver.findByRole('button', {nome: /Ingresar/i});
  };

  // Actions
  const clickIngresarBtn = () => {
    ingresarBtn().click();
    return mainPage;
  };

  return {
    ...BasePage(driver),
    usernameInput,
    passwordInput,
    clickIngresarBtn,
  };
}
