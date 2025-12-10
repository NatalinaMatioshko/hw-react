import { useEffect, useState } from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div сlassName="block">
        Пройшло {this.state.seconds} секунд (Також тут працює react-class
        timer).
      </div>
    );
  }
}

// React.createElement('div', {className: 'block'}, 'Пройшло {this.state.seconds} секунд')

const domContainer = document.querySelector("#timer");
const root = ReactDOM.createRoot(domContainer);

root.render(<Timer />);
