import "reflect-metadata";
import React from "react";
import Routes from "./routes";
import { AppComponent } from "./app/framework/di/AppComponent";

AppComponent.init();

export default function App(): JSX.Element {
  return <Routes />;
}
