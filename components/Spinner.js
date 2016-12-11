// Source: https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json
const FRAMES = [
  '⠋',
  '⠙',
  '⠹',
  '⠸',
  '⠼',
  '⠴',
  '⠦',
  '⠧',
  '⠇',
  '⠏',
];

export default class extends React.Component {
  static propTypes = {
    speed: React.PropTypes.number,
    color: React.PropTypes.string,
  }

  state = {
    frameIndex: 0,
  }

  componentDidMount = () => {
    this.tick = setInterval(() => {
      const { frameIndex } = this.state;
      const nextIndex = frameIndex === FRAMES.length - 1 ? 0 : frameIndex + 1;
      this.setState({ frameIndex: nextIndex });
    }, this.props.speed || 100);
  }

  componentWillUnmount = () => {
    clearInterval(this.tick);
  }

  get frame() {
    return FRAMES[this.state.frameIndex];
  }

  render() {
    return (
      <span style={{ color: this.props.color }}>{ this.frame }</span>
    );
  }
}
