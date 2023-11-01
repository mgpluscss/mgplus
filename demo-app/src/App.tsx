import type { Component } from "solid-js";
import styles from "./App.module.css";
import Header from "./components/Header";
import CoreSection from "./sections/CoreSection";
import NavSection from "./sections/NavSection";
import DropdownSection from "./sections/DropdownSection";
import SelectSection from "./sections/SelectSection";
import RadioSection from "./sections/RadioSection";
import CheckSection from "./sections/CheckSection";
import ToggleSection from "./sections/ToggleSection";
import AlertSection from "./sections/AlertSection";
import BadgeSection from "./sections/BadgeSection";
import TabSection from "./sections/TabSection";
import GroupSection from "./sections/GroupSection";
import GridSection from "./sections/GridSection";
import ModalSection from "./sections/ModalSection";
import FormSection from "./sections/FormSection";
import LoaderSection from "./sections/LoaderSection";
import TimelineSection from "./sections/TimelineSection";

const App: Component = () => {
  return (
    <>
      <Header />
      <main class={styles.header}>
        <div class="page">
          <div class="mg-container">
            <section>
              <div class="mg-nav mg-nav--inline">
                <ul>
                  <li>
                    <a href="#home">
                      Core elements
                    </a>
                  </li>
                  <li>
                    <a href="#home-extensions" >
                      Extensions
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <CoreSection></CoreSection>
            <section id="home-extensions" class="mg-center-block">
              <hr />
              <h1>Extensions</h1>
            </section>
            <NavSection></NavSection>
            <DropdownSection></DropdownSection>
            <SelectSection></SelectSection>
            <RadioSection></RadioSection>
            <CheckSection></CheckSection>
            <ToggleSection></ToggleSection>
            <AlertSection></AlertSection>
            <BadgeSection></BadgeSection>
            <TabSection></TabSection>
            <GroupSection></GroupSection>
            <GridSection></GridSection>
            <ModalSection></ModalSection>
            <FormSection></FormSection>
            <LoaderSection></LoaderSection>
            <TimelineSection></TimelineSection>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
