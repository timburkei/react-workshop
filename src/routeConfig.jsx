// routeConfig.js
import DemoOne from './demoCode/01_NestingComponents/NestingComponents';
import DemoTwo from './demoCode/02_DisplayingData/DisplayingData';
import DemoThree from './demoCode/03_ConditionalRendering/ConditionalRendering';
import DemoFour from './demoCode/04_Events/Event';
import DemoFive from './demoCode/05_UseState/UseState';
import DemoSix from './demoCode/06_UseEffect/UseEffect';
import DemoSeven from './demoCode/07_SharingData/07_SharingData';
import ExcerciseOne from './exercises/01_NestingComponents/MyApp/MyApp';
import ExcerciseTwo from './exercises/02_DisplayingData/DisplayingData';
import ExcerciseThree from './exercises/03_ConditionalRendering/ConditionalRendering';
import ExcerciseFour from './exercises/04_Events/Events';
import ExcerciseFive from './exercises/05_UseState/UseState';
import ExcerciseSix from './exercises/06_UseEffect/UseEffect';
import ExcerciseSeven from './exercises/07_SharingData/SharingData';

export const demos = [
  { path: '/demo/1', component: <DemoOne />, label: 'Demo 1' },
  { path: '/demo/2', component: <DemoTwo />, label: 'Demo 2' },
  { path: '/demo/3', component: <DemoThree />, label: 'Demo 3' },
  { path: '/demo/4', component: <DemoFour />, label: 'Demo 4' },
  { path: '/demo/5', component: <DemoFive />, label: 'Demo 5' },
  { path: '/demo/6', component: <DemoSix />, label: 'Demo 6' },
  { path: '/demo/7', component: <DemoSeven />, label: 'Demo 7' },
];

export const exercises = [
  { path: '/exercise/1', component: <ExcerciseOne />, label: 'Aufgabe 1' },
  { path: '/exercise/2', component: <ExcerciseTwo />, label: 'Aufgabe 2' },
  { path: '/exercise/3', component: <ExcerciseThree />, label: 'Aufgabe 3' },
  { path: '/exercise/4', component: <ExcerciseFour />, label: 'Aufgabe 4' },
  { path: '/exercise/5', component: <ExcerciseFive />, label: 'Aufgabe 5' },
  { path: '/exercise/6', component: <ExcerciseSix />, label: 'Aufgabe 6' },
  { path: '/exercise/7', component: <ExcerciseSeven />, label: 'Aufgabe 7' },
];
