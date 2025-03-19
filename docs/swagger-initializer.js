window.onload = async function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  try {
    const response = await fetch("./urls/index.json");
    if (!response.ok) throw new Error("JSON fetch error");
    const urls = await response.json()?.files;
    window.ui = SwaggerUIBundle({
      urls: urls,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    });
  } catch (error) {
      console.error("Error loading Swagger files:", error);
  }

  //</editor-fold>
};
