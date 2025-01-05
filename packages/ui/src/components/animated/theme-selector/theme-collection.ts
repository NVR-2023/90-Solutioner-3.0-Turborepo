import { Component } from "react";

export type ThemeType = {
  name: string;
  icon?: Component;
  theme: {
    "--background-color": string;
    "--secondary-background-color": string;
    "--tertiary-background-color": string;
    "--text-color": string;
    "--secondary-text-color": string;
    "--tertiary-text-color": string;
    "--error-text-color": string;
    "--info-text-color": string;
    "--border-color": string;
  };
};

export type ThemeCollectionType = {
  name: string;
  collection: ThemeType[];
};

const lightTheme: ThemeType = {
  name: "Light",
  theme: {
    "--background-color": "#ffffff",
    "--secondary-background-color": "#f8f9fa",
    "--tertiary-background-color": "#e9ecef",
    "--text-color": "#212529",
    "--secondary-text-color": "#495057",
    "--tertiary-text-color": "#6c757d",
    "--border-color": "#dddddd",
    "--error-text-color": "#dc3545",
    "--info-text-color": "#17a2b8",
  },
};

const darkTheme: ThemeType = {
  name: "Dark",
  theme: {
    "--background-color": "#343a40",
    "--secondary-background-color": "#495057",
    "--tertiary-background-color": "#6c757d",
    "--text-color": "#ffffff",
    "--secondary-text-color": "#e9ecef",
    "--tertiary-text-color": "#ced4da",
    "--border-color": "#444444",
    "--error-text-color": "#dc3545",
    "--info-text-color": "#17a2b8",
  },
};

const customTheme: ThemeType = {
  name: "Custom",
  theme: {
    "--background-color": "#282c34",
    "--secondary-background-color": "#3c3f41",
    "--tertiary-background-color": "#4f5254",
    "--text-color": "#abb2bf",
    "--secondary-text-color": "#dcdfe4",
    "--tertiary-text-color": "#e0e6ed",
    "--border-color": "#61dafb",
    "--error-text-color": "#ff6c6b",
    "--info-text-color": "#61dafb",
  },
};

const userThemeCollection: ThemeCollectionType = {
  name: "User",
  collection: [lightTheme, darkTheme, customTheme],
};
