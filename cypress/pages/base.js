export default function BasePage(driver) {
  const open = url => {
    driver.visit(url || 'https://stg-portal.pedidosya.com/');
  };

  const pageTitle = () => {
    return driver.title();
  };

  return {
    open,
    pageTitle,
  };
}
