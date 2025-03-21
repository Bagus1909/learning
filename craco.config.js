const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "green-1": "#E5FAEC",
              "green-2": "#BBF2CE",
              "green-3": "#8FEDAF",
              "green-4": "#63DF8D",
              "green-5": "#3DD370",
              "green-6": "#18C753",
              "green-7": "#0D9F3F",
              "green-8": "#057B2D",
              "green-9": "#004F1B",
              "green-10": "#00270D",
              "primary-color": "#0D9F3F",
              "success-color": "#0D9F3F",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
