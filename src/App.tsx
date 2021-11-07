import { AppProvider } from "lib/cbi-react-core";
import { TranslateProvider } from "lib/cbi-react-translate";
import { Suspense } from "react";
import { Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material'
import { routers } from "routers";
import store from "store";
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import './assets/style/style.scss'

const theme = createTheme({
  palette: {
    primary: {
      main: '#14c1c2',
      contrastText: 'white'
    },
  },
  shape: {
    // borderRadius: 100,
  },
  typography: {
    button: {
      
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        style: {
          height: 62,
        },
        className: 'text-field',
      },
    }
  }
  // shadows: Array(25).fill("none") as any
});

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <TranslateProvider>
        <AppProvider store={store}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading.....</div>}>
              <Switch>
                {routers}
              </Switch>
            </Suspense>
          </ThemeProvider>

        </AppProvider>
      </TranslateProvider>
    </LocalizationProvider>
  );
}

export default App;
