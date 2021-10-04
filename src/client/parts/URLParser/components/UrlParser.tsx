import React from 'react';

import BaseInput, { InputSize } from '../../../components/Input';
import BaseButton, { ButtonFormFactor } from '../../../components/BaseButton';
import axios from 'axios';

type State = {
  urlToParse: string;
  parsingLoading: boolean,
}

export default class UrlParser extends React.Component<{}, State> {
  state = {
    urlToParse: '',
    parsingLoading: false,
  };

  parseUrl = async () => {
    const { urlToParse } = this.state;
    this.handleChangeParsingLoading(true);

    if (urlToParse) {
      const html1 = await axios.get(urlToParse);

      console.log('🤖🤖🤖🤖 html1', html1);
    }

    this.handleChangeParsingLoading(false);
  };

  handleChangeUrlToParse = (urlToParse: string) => this.setState({ urlToParse });

  handleChangeParsingLoading = (parsingLoading: boolean) => this.setState({ parsingLoading });

  render() {
    const { urlToParse } = this.state;

    return (
      <div>
        <p>Вставьте ссылку на товар</p>
        <BaseInput
          formFactor={InputSize.Medium}
          onChangeText={this.handleChangeUrlToParse}
          value={urlToParse || ''}
        />
        <BaseButton
          formFactor={ButtonFormFactor.Medium}
          text="Исследовать"
          onClick={this.parseUrl}
        />
      </div>
    );
  }
}
