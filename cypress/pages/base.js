export default function BasePage(driver) {
  const open = url => {
    driver.visit(url || 'http://localhost:8000');
  };

  const pageTitle = () => {
    return driver.title();
  };

  return {
    open,
    pageTitle,
  };
}
