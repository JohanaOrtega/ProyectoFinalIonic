import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  cameraOutline,
  documentAttachOutline,
  earOutline,
  earthOutline,
  ellipse,
  idCard,
  idCardOutline,
  mapOutline,
  navigateOutline,
  notificationsOutline,
  radioOutline,
  readerOutline,
  shareSocial,
  shareSocialOutline,
  square,
  triangle,
} from "ionicons/icons";
import ElementUno from "./pages/ElementUno";
import ElementDos from "./pages/ElementDos";
import ElementTres from "./pages/ElementTres";
import ElementCuatro from "./pages/ElementCuatro";
import ElementCinco from "./pages/ElementCinco";
import ElementSeis from "./pages/ElementSeis";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ElementUno">
            <ElementUno />
          </Route>
          <Route exact path="/ElementDos">
            <ElementDos />
          </Route>
          <Route path="/ElementTres">
            <ElementTres />
          </Route>
          <Route path="/ElementCuatro">
            <ElementCuatro />
          </Route>
          <Route path="/ElementCinco">
            <ElementCinco />
          </Route>
          <Route path="/ElementSeis">
            <ElementSeis />
          </Route>
          <Route exact path="/">
            <Redirect to="/ElementTres" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="ElementTres" href="/ElementTres">
            <IonIcon aria-hidden="true" icon={notificationsOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="ElementCinco" href="/ElementCinco">
            <IonIcon aria-hidden="true" icon={idCardOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="ElementUno" href="/ElementUno">
            <IonIcon aria-hidden="true" icon={cameraOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="ElementDos" href="/ElementDos">
            <IonIcon aria-hidden="true" icon={navigateOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="ElementCuatro" href="/ElementCuatro">
            <IonIcon aria-hidden="true" icon={radioOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>       
          <IonTabButton tab="ElementSeis" href="/ElementSeis">
            <IonIcon aria-hidden="true" icon={shareSocialOutline} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
