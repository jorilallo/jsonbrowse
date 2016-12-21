import { Component } from 'react';
import s from 'styled-components';
import { Flex } from 'reflexbox';
import CopyToClipboard from 'react-copy-to-clipboard';
import { objectifyJson } from '../utils/json';

export default class extends Component {
  state = {
    copiedJs: false,
    copiedJson: false,
  }

  onJsCopy = () => this.onCopy('copiedJs')
  onJsonCopy = () => this.onCopy('copiedJson')

  onCopy = (type) => {
    this.setState({ [type]: true });
    setTimeout(() => this.setState({ [type]: false }), 2000);
  }

  render() {
    return (
      <Container column>
        <Copy
          text={ this.props.json }
          onCopy={ this.onJsonCopy }
        >
          <span>{ this.state.copiedJson ? '✔ Copied' : 'Copy as JSON' }</span>
        </Copy>
        <Copy
          text={ objectifyJson(this.props.json) }
          onCopy={ this.onJsCopy }
        >
          <span>{ this.state.copiedJs ? '✔ Copied' : 'Copy as Javascript' }</span>
        </Copy>
        <Console>
          Open Javascript console for more options (⌥⌘J)
        </Console>
      </Container>
    );
  }
}

const Container = s(Flex)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  padding: 20px;
  z-index: 9999999999;

  background-color: rgb(54, 165, 253);
  color: #FFFFFF;

  @media only screen and (max-width: 425px) {
    display: none !important;
  }
`;

const Console = s.div`
  font-size: 14px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dotted rgb(141, 204, 255);
`;

const Copy = s(CopyToClipboard)`
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(54, 165, 253);

  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-bottom: 1px dotted #FFFFFF;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
