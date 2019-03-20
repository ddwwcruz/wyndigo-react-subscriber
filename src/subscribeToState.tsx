import * as React from "react";
import { State } from "wyndigo-broadcaster";

export const subscribeToState = (state: State<any>) => (Comp: typeof React.Component) => {

  return class extends React.Component {
    componentWillMount() {
      state.subscribe(this.onStateChange);
    }

    componentWillUnmount() {
      state.unsubscribe(this.onStateChange);
    }

    render() {
      return (
        <Comp
          {...this.props}
        />
      );
    }

    onStateChange = () => this.forceUpdate();
  }
}
