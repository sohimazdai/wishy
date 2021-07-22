import React from 'react';
import classNames from 'classnames';

import { MoonIcon, PaletteIcon, SunIcon } from './icons';

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export enum PrimaryColor {
  Lavanda = 'lavanda',
  BlueBerry = 'blueberry',
  Eggplant = 'eggplant',
  Tomato = 'tomato',
}

const colors = [
  {
    title: PrimaryColor.BlueBerry,
    color: '#4f86f7',
  },
  {
    title: PrimaryColor.Eggplant,
    color: '#614051',
  },
  {
    title: PrimaryColor.Tomato,
    color: '#ff6347',
  },
  {
    title: PrimaryColor.Lavanda,
    color: '#954BA1',
  },
];

interface State {
  isDarkModeActive: boolean;
  currentColor: PrimaryColor;
}

export default class Palette extends React.Component<{}, State> {
  state = {
    isDarkModeActive: false,
    currentColor: PrimaryColor.Lavanda,
  };

  get window() {
    return window as Window;
  }

  componentDidMount() {
    this.setTheme();
    this.setPrimaryColor();
  }

  toggleTheme = () => {
    const isDarkNow = !this.state.isDarkModeActive;
    this.setState({ isDarkModeActive: isDarkNow });

    const themeToSet = isDarkNow ? Theme.Dark : Theme.Light;

    this.window.localStorage.setItem('theme', themeToSet);

    document.documentElement.setAttribute('data-theme', themeToSet);
  }

  setTheme = () => {
    const currentTheme: string | null = this.window.localStorage.getItem('theme');
    const themeToSet = currentTheme
      ? currentTheme
      : this.checkIsDarkTime() ? Theme.Dark : Theme.Light;

    if (themeToSet === Theme.Dark) this.setState({ isDarkModeActive: true });

    document.documentElement.setAttribute('data-theme', themeToSet);
  }

  checkIsDarkTime = () => {
    const currentHour = new Date().getHours();

    return currentHour > 19 || currentHour < 5;
  }

  setPrimaryColor = () => {
    const currentColor: string | null = this.window.localStorage.getItem('theme-primary');
    const colorToSet = currentColor
      ? currentColor as PrimaryColor
      : PrimaryColor.Lavanda;

    this.setState({ currentColor: colorToSet });

    document.documentElement.setAttribute('data-theme-primary', colorToSet);
  }

  changePrimaryColor = (color: PrimaryColor) => {
    this.setState({ currentColor: color });

    this.window.localStorage.setItem('theme-primary', color);

    document.documentElement.setAttribute('data-theme-primary', color);
  }

  render() {
    const { isDarkModeActive, currentColor } = this.state;

    const toggleCn = classNames('navigationBar_themeToggle', {
      'navigationBar_themeToggle--checked': isDarkModeActive,
    });
    const indicatorCn = classNames('navigationBar_themeToggleIndicator', {
      'navigationBar_themeToggleIndicator--checked': isDarkModeActive,
    });

    return (
      <div className="navigationBar_palette">
        <PaletteIcon />
        <div className="navigationBar_paletteContentWrapper">
          <div className="navigationBar_paletteContent">
            <div onClick={this.toggleTheme} className="navigationBar_themeToggleWrapper">
              <SunIcon />
              <div className={toggleCn}>
                <div className={indicatorCn} />
              </div>
              <MoonIcon />
            </div>
            <div>
              {colors.map((palette) => {
                const cn = classNames('navigationBar_paletteColorPicker', {
                  'navigationBar_paletteColorPicker--selected': currentColor === palette.title,
                });

                return (
                  <div
                    className={cn}
                    key={palette.title + palette.color}
                    style={{ backgroundColor: palette.color }}
                    onClick={() => this.changePrimaryColor(palette.title)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
