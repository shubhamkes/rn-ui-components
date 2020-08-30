export * from "./basic-components";

export * as RippleFeedback from "./components/Ripple-Feedback";

export * from './components/Ripple';
// export { Button } from "./components/Button/button";

export * from "./composite-components";

export * from './utils/platform.utils';

export * from './utils/dimensionHandler.utils';

export function InitLibrary({ LocalizeContext }) {
    (window as any).LocalizeContext = LocalizeContext;
}