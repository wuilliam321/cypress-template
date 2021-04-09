import BasePage from './base';
import MainPage from './main';

export default function HomePage(driver) {
  const mainPage = MainPage(driver);
  // Attrs
  const submitBtn = () => {
    return driver.findByText('Enviar');
  };

  // Actions
  const clickSubmit = () => {
    submitBtn().click();
    return mainPage;
  };

  return {
    ...BasePage(driver),
    clickSubmit,
    submitBtn,
  };
};
