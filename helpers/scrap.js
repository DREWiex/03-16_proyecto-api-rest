const puppeteer = require('puppeteer');

const searchGoogle = async () => {
// Obtener el navegador que vamos a utilizar.
  const browser = await puppeteer.launch();

        // Si headless esta en true, se oculta el chromium.

        // const browser = await puppeteer.launch({
        //   headless: false,
        // });

  // Es como abrir una nueva página/pestaña en el navegador.
  const page = await browser.newPage();
  // console.log("Abre el navegador");

  // Para ir a una página en concreto.
  await page.goto("http://www.amazon.es");
  // console.log("Abrió Amazon");

  // Para hacer click al mensaje de cookies.
  await page.click("#sp-cc-accept");
  // console.log("Clickeo");

  //Hacemos una captura de pantalla.
  await page.screenshot({ path: "amazon.jpg" });
  // console.log("Hizo Foto");

  //Se cierra el navegador.
  await browser.close();
};


module.exports = {searchGoogle};