const config = {

  locales: [
     'es'
  ],

  "translations": {
    "es": {
      "app.components.LeftMenu.navbrand.title": "Panel de control de Leidylac",
      "app.components.LeftMenu.navbrand.workplace": "Lugar de trabajo",
      "Auth.form.welcome.title": "Bienvenido",
      "Auth.form.welcome.subtitle": "Ingrese a su cuenta",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Los cambios de preferencias se aplicarán sólo a usted."
    },
    "en": {
      "app.components.LeftMenu.navbrand.title": "Panel de control de Leidylac",
      "app.components.LeftMenu.navbrand.workplace": "Lugar de trabajo",
      "Auth.form.welcome.title": "Bienvenido",
      "Auth.form.welcome.subtitle": "Ingrese a su cuenta",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Los cambios de preferencias se aplicarán sólo a usted."
    }
  },

  tutorials:false,

  notifications:{releases:false},

};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
