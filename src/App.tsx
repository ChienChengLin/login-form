import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Title from "./components/Title";
import CaroselRadioButtons from "./components/CaroselRadioButtons";
import Description from "./components/Descriptiton";
import InputField from "./components/InputField";
import Link from "./components/Link";
import Button from "./components/Button";
import { theme } from "./styles/theme";
import { AccountType } from "./constants/terms";
import { loginValidation } from "./utils/auth";

import { ReactComponent as DoctorLogo } from "./assets/img_doctor_90@3x.svg";
import { ReactComponent as PatientLogo } from "./assets/img_patient_90@3x.svg";
import { ReactComponent as TownBackground } from "./assets/img_town_370x170@3x.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  max-width: 100%;
  padding: 20px 15px 0;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #c5cbce;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
`;

export default function App() {
  const [accountType, setAccountType] = useState(AccountType.DoctorA);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isPasswordValid = loginValidation(email, password);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LoginWrapper>
          <Title
            text="Choose Account Type"
            customizedStyle={{ marginBottom: 20 }}
          />
          <CaroselRadioButtons
            choices={[
              { label: AccountType.DoctorA, svgComponent: DoctorLogo },
              { label: AccountType.PatientA, svgComponent: PatientLogo },
              { label: AccountType.DoctorB, svgComponent: DoctorLogo },
              { label: AccountType.PatientB, svgComponent: PatientLogo }
            ]}
            selectedChoice={accountType}
            onChangeChoice={(accountType) => setAccountType(accountType)}
          />
          <Description
            text={`Hello ${accountType} !\nPlease fill out the form below to get started`}
            customizedStyle={{ margin: "8px 0 24px" }}
          />
          <InputField
            value={email}
            onChangeValue={(event) => setEmail(event.target.value)}
          />
          <InputField
            value={password}
            onChangeValue={(event) => setPassword(event.target.value)}
            type="password"
            label="Password"
            prefixIcon={LockOutlinedIcon}
            postfixLinkTitle="Forgot?"
            onClickPostfixLink={() => {}}
            isValid={isPasswordValid}
            helperText="Any consecutive 6 charachers of the password shouldn't be the same as any consecutive 6 digits of the email."
          />
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ marginTop: 15 }}
          >
            <Grid item>
              <Description
                text="No account?"
                customizedStyle={{ margin: "0 4px 0 0" }}
              />
            </Grid>
            <Grid item style={{ marginRight: "auto" }}>
              <Link title="Signup" onClick={() => {}} />
            </Grid>
            <Grid item>
              <Button
                title="Login"
                onClick={() => {}}
                customizedStyle={{ width: 100 }}
              />
            </Grid>
          </Grid>
          <BackgroundWrapper>
            <TownBackground
              style={{
                position: "relative",
                right: 80,
                transform: "scale(1.2)"
              }}
            />
          </BackgroundWrapper>
        </LoginWrapper>
      </Container>
    </ThemeProvider>
  );
}
