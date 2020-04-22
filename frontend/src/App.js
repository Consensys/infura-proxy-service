import React from "react";
import "./App.css";

import Providers from "./providers";
import Section from "./components/Section";
// Tables
import ContractDetails from "./containers/ContractDetails";
import ContractEventMetaDetails from "./containers/ContractEventMetaDetails";
import ContractEventDetails from "./containers/ContractEventDetails";
//Forms
import FormContractRawUpload from "./forms/FormContractRawUpload";

function App() {
  return (
    <div className="App">
      <Providers>
        <Section>
          <ContractDetails address="0x8315DA5a0E713F9A9b2260772A06046EA72a9cC5" />
          <ContractEventMetaDetails address="0x8315DA5a0E713F9A9b2260772A06046EA72a9cC5" />
          <ContractEventDetails address="0x8315DA5a0E713F9A9b2260772A06046EA72a9cC5" />
        </Section>
        <Section>
          <h1>Create Contract Cache</h1>
          <FormContractRawUpload />
        </Section>
      </Providers>
    </div>
  );
}

export default App;
