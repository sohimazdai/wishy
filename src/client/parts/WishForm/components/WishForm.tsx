import React from 'react';

import WishFormCloneInput from './WishFormCloneInput';

type State = { [x: string]: string } & {
  url: string,
  name: string,
  price?: string,
}

export default class WishForm extends React.Component<{}, State> {
  state = {
    url: '',
    name: '',
    price: '',
  };

  handleChangeStateField = (key: string, value: string) => this.setState({ [key]: value });

  render() {
    return (
      <div>
        {Object.entries(this.state).map((entry: [string, string]) => (
          <WishFormCloneInput
            key={entry[0]}
            keyName={entry[0]}
            keyValue={entry[1]}
            onChangeText={this.handleChangeStateField}
          />
        ))}
      </div>
    );
  }
}
