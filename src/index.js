import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./redux/store"
import App from "./components/App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

console.log("%cWELCOME TO ZIORPARK PAGE!", `font-size: 25px;`)
console.log(
  `%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c010%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c01%c0%c1%c0%c10%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c10%c1
%c0%c10%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c10%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c101%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1
%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c0%c1%c01%c0%c1%c0%c1%c0%c1%c0%c10%c1%c0%c1`,
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#b0b0b0;",
  "background-color: #000000; color:#aeaeae;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#b2b2b2;",
  "background-color: #000000; color:#b4b4b4;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#c1c1c1;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#c6c6c6;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#c1c1c1;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#b3b3b3;",
  "background-color: #000000; color:#acacac;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#b4b4b4;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#bababa;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#C0C0C0;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#cbcbcb;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#d9d9d9;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#bcbcbc;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#bbbbbb;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#c2c2c2;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#c3c3c3;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#b4b4b4;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#bbbbbb;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#C0C0C0;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#dbdbdb;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#757575;",
  "background-color: #000000; color:#5a5a5a;",
  "background-color: #000000; color:#4c4c4c;",
  "background-color: #000000; color:#3a3a3a;",
  "background-color: #000000; color:#3f3f3f;",
  "background-color: #000000; color:#3d3d3d;",
  "background-color: #000000; color:#3f3f3f;",
  "background-color: #000000; color:#434343;",
  "background-color: #000000; color:#484848;",
  "background-color: #000000; color:#545454;",
  "background-color: #000000; color:#6d6d6d;",
  "background-color: #000000; color:#979797;",
  "background-color: #000000; color:#c1c1c1;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#bababa;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#C0C0C0;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#aeaeae;",
  "background-color: #000000; color:#777777;",
  "background-color: #000000; color:#525252;",
  "background-color: #000000; color:#3a3a3a;",
  "background-color: #000000; color:#353535;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#1d1d1d;",
  "background-color: #000000; color:#242424;",
  "background-color: #000000; color:#323232;",
  "background-color: #000000; color:#3a3a3a;",
  "background-color: #000000; color:#333333;",
  "background-color: #000000; color:#383838;",
  "background-color: #000000; color:#3e3e3e;",
  "background-color: #000000; color:#444444;",
  "background-color: #000000; color:#595959;",
  "background-color: #000000; color:#818181;",
  "background-color: #000000; color:#afafaf;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#d8d8d8;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#cbcbcb;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c6c6c6;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#b3b3b3;",
  "background-color: #000000; color:#818181;",
  "background-color: #000000; color:#5a5a5a;",
  "background-color: #000000; color:#3b3b3b;",
  "background-color: #000000; color:#313131;",
  "background-color: #000000; color:#343434;",
  "background-color: #000000; color:#3f3f3f;",
  "background-color: #000000; color:#353535;",
  "background-color: #000000; color:#313131;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#282828;",
  "background-color: #000000; color:#323232;",
  "background-color: #000000; color:#393939;",
  "background-color: #000000; color:#3a3a3a;",
  "background-color: #000000; color:#393939;",
  "background-color: #000000; color:#383838;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#373737;",
  "background-color: #000000; color:#3b3b3b;",
  "background-color: #000000; color:#3a3a3a;",
  "background-color: #000000; color:#5f5f5f;",
  "background-color: #000000; color:#9b9b9b;",
  "background-color: #000000; color:#c3c3c3;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#dddddd;",
  "background-color: #000000; color:#dcdcdc;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#c3c3c3;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#cecece;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#626262;",
  "background-color: #000000; color:#3f3f3f;",
  "background-color: #000000; color:#393939;",
  "background-color: #000000; color:#212121;",
  "background-color: #000000; color:#232323;",
  "background-color: #000000; color:#2c2c2c;",
  "background-color: #000000; color:#383838;",
  "background-color: #000000; color:#2d2d2d;",
  "background-color: #000000; color:#323232;",
  "background-color: #000000; color:#434343;",
  "background-color: #000000; color:#343434;",
  "background-color: #000000; color:#464646;",
  "background-color: #000000; color:#414141;",
  "background-color: #000000; color:#444444;",
  "background-color: #000000; color:#3e3e3e;",
  "background-color: #000000; color:#353535;",
  "background-color: #000000; color:#313131;",
  "background-color: #000000; color:#272727;",
  "background-color: #000000; color:#2c2c2c;",
  "background-color: #000000; color:#2e2e2e;",
  "background-color: #000000; color:#525252;",
  "background-color: #000000; color:#717171;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#dcdcdc;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#c6c6c6;",
  "background-color: #000000; color:#cbcbcb;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#777777;",
  "background-color: #000000; color:#353535;",
  "background-color: #000000; color:#242424;",
  "background-color: #000000; color:#131313;",
  "background-color: #000000; color:#1b1b1b;",
  "background-color: #000000; color:#202020;",
  "background-color: #000000; color:#1e1e1e;",
  "background-color: #000000; color:#161616;",
  "background-color: #000000; color:#222222;",
  "background-color: #000000; color:#252525;",
  "background-color: #000000; color:#1c1c1c;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#333333;",
  "background-color: #000000; color:#2f2f2f;",
  "background-color: #000000; color:#1e1e1e;",
  "background-color: #000000; color:#222222;",
  "background-color: #000000; color:#1e1e1e;",
  "background-color: #000000; color:#292929;",
  "background-color: #000000; color:#101010;",
  "background-color: #000000; color:#181818;",
  "background-color: #000000; color:#262626;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#535353;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#dadada;",
  "background-color: #000000; color:#d8d8d8;",
  "background-color: #000000; color:#cecece;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#cecece;",
  "background-color: #000000; color:#d2d2d2;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#b7b7b7;",
  "background-color: #000000; color:#444444;",
  "background-color: #000000; color:#1a1a1a;",
  "background-color: #000000; color:#0d0d0d;",
  "background-color: #000000; color:#080808;",
  "background-color: #000000; color:#1f1f1f;",
  "background-color: #000000; color:#232323;",
  "background-color: #000000; color:#1f1f1f;",
  "background-color: #000000; color:#1d1d1d;",
  "background-color: #000000; color:#171717;",
  "background-color: #000000; color:#464646;",
  "background-color: #000000; color:#434343;",
  "background-color: #000000; color:#323232;",
  "background-color: #000000; color:#2c2c2c;",
  "background-color: #000000; color:#232323;",
  "background-color: #000000; color:#545454;",
  "background-color: #000000; color:#2b2b2b;",
  "background-color: #000000; color:#181818;",
  "background-color: #000000; color:#1f1f1f;",
  "background-color: #000000; color:#2d2d2d;",
  "background-color: #000000; color:#6c6c6c;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#d8d8d8;",
  "background-color: #000000; color:#cecece;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c2c2c2;",
  "background-color: #000000; color:#C0C0C0;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#c1c1c1;",
  "background-color: #000000; color:#c7c7c7;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#cccccc;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#d4d4d4;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#606060;",
  "background-color: #000000; color:#1c1c1c;",
  "background-color: #000000; color:#0a0a0a;",
  "background-color: #000000; color:#1d1d1d;",
  "background-color: #000000; color:#606060;",
  "background-color: #000000; color:#535353;",
  "background-color: #000000; color:#414141;",
  "background-color: #000000; color:#444444;",
  "background-color: #000000; color:#545454;",
  "background-color: #000000; color:#b3b3b3;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#818181;",
  "background-color: #000000; color:#6f6f6f;",
  "background-color: #000000; color:#757575;",
  "background-color: #000000; color:#9a9a9a;",
  "background-color: #000000; color:#424242;",
  "background-color: #000000; color:#1c1c1c;",
  "background-color: #000000; color:#353535;",
  "background-color: #000000; color:#686868;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#cfcfcf;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#bbbbbb;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#c3c3c3;",
  "background-color: #000000; color:#bcbcbc;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#cbcbcb;",
  "background-color: #000000; color:#c6c6c6;",
  "background-color: #000000; color:#cacaca;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#d0d0d0;",
  "background-color: #000000; color:#dbdbdb;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#b3b3b3;",
  "background-color: #000000; color:#737373;",
  "background-color: #000000; color:#4e4e4e;",
  "background-color: #000000; color:#454545;",
  "background-color: #000000; color:#b7b7b7;",
  "background-color: #000000; color:#c5c5c5;",
  "background-color: #000000; color:#bcbcbc;",
  "background-color: #000000; color:#b2b2b2;",
  "background-color: #000000; color:#b0b0b0;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#d6d6d6;",
  "background-color: #000000; color:#e2e2e2;",
  "background-color: #000000; color:#ededed;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#686868;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#d1d1d1;",
  "background-color: #000000; color:#cdcdcd;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#c2c2c2;",
  "background-color: #000000; color:#b9b9b9;",
  "background-color: #000000; color:#bbbbbb;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#a5a5a5;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#a5a5a5;",
  "background-color: #000000; color:#a7a7a7;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#b8b8b8;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#C0C0C0;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#c9c9c9;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#d3d3d3;",
  "background-color: #000000; color:#d7d7d7;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#b3b3b3;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#8f8f8f;",
  "background-color: #000000; color:#b0b0b0;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#a8a8a8;",
  "background-color: #000000; color:#b7b7b7;",
  "background-color: #000000; color:#d5d5d5;",
  "background-color: #000000; color:#e1e1e1;",
  "background-color: #000000; color:#dddddd;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#c8c8c8;",
  "background-color: #000000; color:#cbcbcb;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#bcbcbc;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#adadad;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#a7a7a7;",
  "background-color: #000000; color:#a2a2a2;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#999999;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#adadad;",
  "background-color: #000000; color:#afafaf;",
  "background-color: #000000; color:#b4b4b4;",
  "background-color: #000000; color:#bebebe;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#bababa;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#bcbcbc;",
  "background-color: #000000; color:#bfbfbf;",
  "background-color: #000000; color:#cecece;",
  "background-color: #000000; color:#c4c4c4;",
  "background-color: #000000; color:#bdbdbd;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#a1a1a1;",
  "background-color: #000000; color:#8d8d8d;",
  "background-color: #000000; color:#191919;",
  "background-color: #000000; color:#2b2b2b;",
  "background-color: #000000; color:#4a4a4a;",
  "background-color: #000000; color:#575757;",
  "background-color: #000000; color:#626262;",
  "background-color: #000000; color:#7f7f7f;",
  "background-color: #000000; color:#8b8b8b;",
  "background-color: #000000; color:#717171;",
  "background-color: #000000; color:#333333;",
  "background-color: #000000; color:#4a4a4a;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#a9a9a9;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#a9a9a9;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#a7a7a7;",
  "background-color: #000000; color:#acacac;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#999999;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#929292;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#8c8c8c;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#b5b5b5;",
  "background-color: #000000; color:#a8a8a8;",
  "background-color: #000000; color:#aaaaaa;",
  "background-color: #000000; color:#acacac;",
  "background-color: #000000; color:#b0b0b0;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#989898;",
  "background-color: #000000; color:#8f8f8f;",
  "background-color: #000000; color:#969696;",
  "background-color: #000000; color:#9a9a9a;",
  "background-color: #000000; color:#979797;",
  "background-color: #000000; color:#1c1c1c;",
  "background-color: #000000; color:#090909;",
  "background-color: #000000; color:#070707;",
  "background-color: #000000; color:#060606;",
  "background-color: #000000; color:#050505;",
  "background-color: #000000; color:#060606;",
  "background-color: #000000; color:#0b0b0b;",
  "background-color: #000000; color:#111111;",
  "background-color: #000000; color:#383838;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#a9a9a9;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#979797;",
  "background-color: #000000; color:#999999;",
  "background-color: #000000; color:#989898;",
  "background-color: #000000; color:#9e9e9e;",
  "background-color: #000000; color:#a5a5a5;",
  "background-color: #000000; color:#9f9f9f;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#8a8a8a;",
  "background-color: #000000; color:#878787;",
  "background-color: #000000; color:#7e7e7e;",
  "background-color: #000000; color:#939393;",
  "background-color: #000000; color:#9a9a9a;",
  "background-color: #000000; color:#9f9f9f;",
  "background-color: #000000; color:#a5a5a5;",
  "background-color: #000000; color:#a7a7a7;",
  "background-color: #000000; color:#b1b1b1;",
  "background-color: #000000; color:#b6b6b6;",
  "background-color: #000000; color:#b0b0b0;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#9f9f9f;",
  "background-color: #000000; color:#a1a1a1;",
  "background-color: #000000; color:#a2a2a2;",
  "background-color: #000000; color:#a1a1a1;",
  "background-color: #000000; color:#9e9e9e;",
  "background-color: #000000; color:#4d4d4d;",
  "background-color: #000000; color:#101010;",
  "background-color: #000000; color:#0d0d0d;",
  "background-color: #000000; color:#0b0b0b;",
  "background-color: #000000; color:#0e0e0e;",
  "background-color: #000000; color:#0f0f0f;",
  "background-color: #000000; color:#0e0e0e;",
  "background-color: #000000; color:#121212;",
  "background-color: #000000; color:#131313;",
  "background-color: #000000; color:#5c5c5c;",
  "background-color: #000000; color:#afafaf;",
  "background-color: #000000; color:#adadad;",
  "background-color: #000000; color:#a8a8a8;",
  "background-color: #000000; color:#9b9b9b;",
  "background-color: #000000; color:#9f9f9f;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#9a9a9a;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#acacac;",
  "background-color: #000000; color:#afafaf;",
  "background-color: #000000; color:#adadad;",
  "background-color: #000000; color:#a3a3a3;",
  "background-color: #000000; color:#939393;",
  "background-color: #000000; color:#7c7c7c;",
  "background-color: #000000; color:#747474;",
  "background-color: #000000; color:#898989;",
  "background-color: #000000; color:#7f7f7f;",
  "background-color: #000000; color:#727272;",
  "background-color: #000000; color:#797979;",
  "background-color: #000000; color:#787878;",
  "background-color: #000000; color:#8a8a8a;",
  "background-color: #000000; color:#a2a2a2;",
  "background-color: #000000; color:#a4a4a4;",
  "background-color: #000000; color:#a5a5a5;",
  "background-color: #000000; color:#9b9b9b;",
  "background-color: #000000; color:#a2a2a2;",
  "background-color: #000000; color:#a1a1a1;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#7e7e7e;",
  "background-color: #000000; color:#121212;",
  "background-color: #000000; color:#181818;",
  "background-color: #000000; color:#141414;",
  "background-color: #000000; color:#151515;",
  "background-color: #000000; color:#171717;",
  "background-color: #000000; color:#181818;",
  "background-color: #000000; color:#141414;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#ababab;",
  "background-color: #000000; color:#a8a8a8;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#969696;",
  "background-color: #000000; color:#949494;",
  "background-color: #000000; color:#919191;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#a2a2a2;",
  "background-color: #000000; color:#9b9b9b;",
  "background-color: #000000; color:#989898;",
  "background-color: #000000; color:#898989;",
  "background-color: #000000; color:#8f8f8f;",
  "background-color: #000000; color:#7f7f7f;",
  "background-color: #000000; color:#707070;",
  "background-color: #000000; color:#7c7c7c;",
  "background-color: #000000; color:#6b6b6b;",
  "background-color: #000000; color:#5a5a5a;",
  "background-color: #000000; color:#656565;",
  "background-color: #000000; color:#5b5b5b;",
  "background-color: #000000; color:#505050;",
  "background-color: #000000; color:#5d5d5d;",
  "background-color: #000000; color:#7d7d7d;",
  "background-color: #000000; color:#888888;",
  "background-color: #000000; color:#858585;",
  "background-color: #000000; color:#969696;",
  "background-color: #000000; color:#989898;",
  "background-color: #000000; color:#9a9a9a;",
  "background-color: #000000; color:#9b9b9b;",
  "background-color: #000000; color:#979797;",
  "background-color: #000000; color:#919191;",
  "background-color: #000000; color:#161616;",
  "background-color: #000000; color:#191919;",
  "background-color: #000000; color:#181818;",
  "background-color: #000000; color:#161616;",
  "background-color: #000000; color:#262626;",
  "background-color: #000000; color:#a7a7a7;",
  "background-color: #000000; color:#a6a6a6;",
  "background-color: #000000; color:#a1a1a1;",
  "background-color: #000000; color:#9c9c9c;",
  "background-color: #000000; color:#929292;",
  "background-color: #000000; color:#949494;",
  "background-color: #000000; color:#878787;",
  "background-color: #000000; color:#989898;",
  "background-color: #000000; color:#8b8b8b;",
  "background-color: #000000; color:#747474;",
  "background-color: #000000; color:#545454;",
  "background-color: #000000; color:#727272;",
  "background-color: #000000; color:#828282;",
  "background-color: #000000; color:#7f7f7f;",
  "background-color: #000000; color:#777777;",
  "background-color: #000000; color:#666666;",
  "background-color: #000000; color:#686868;",
  "background-color: #000000; color:#575757;",
  "background-color: #000000; color:#4e4e4e;",
  "background-color: #000000; color:#4c4c4c;",
  "background-color: #000000; color:#4e4e4e;",
  "background-color: #000000; color:#363636;",
  "background-color: #000000; color:#3d3d3d;",
  "background-color: #000000; color:#5a5a5a;",
  "background-color: #000000; color:#707070;",
  "background-color: #000000; color:#656565;",
  "background-color: #000000; color:#7f7f7f;",
  "background-color: #000000; color:#8b8b8b;",
  "background-color: #000000; color:#8e8e8e;",
  "background-color: #000000; color:#898989;",
  "background-color: #000000; color:#8a8a8a;",
  "background-color: #000000; color:#3e3e3e;",
  "background-color: #000000; color:#171717;",
  "background-color: #000000; color:#232323;",
  "background-color: #000000; color:#1a1a1a;",
  "background-color: #000000; color:#1f1f1f;",
  "background-color: #000000; color:#1a1a1a;",
  "background-color: #000000; color:#0b0b0b;",
  "background-color: #000000; color:#484848;",
  "background-color: #000000; color:#a0a0a0;",
  "background-color: #000000; color:#9d9d9d;",
  "background-color: #000000; color:#959595;",
  "background-color: #000000; color:#8d8d8d;",
  "background-color: #000000; color:#828282;",
  "background-color: #000000; color:#7c7c7c;",
  "background-color: #000000; color:#8f8f8f;",
  "background-color: #000000; color:#707070;",
  "background-color: #000000; color:#414141;",
  "background-color: #000000; color:#5e5e5e;",
  "background-color: #000000; color:#747474;",
  "background-color: #000000; color:#6f6f6f;",
  "background-color: #000000; color:#6d6d6d;",
  "background-color: #000000; color:#585858;"
)
