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
    title: PrimaryColor.Lavanda,
    color: '#954BA1',
  },
  {
    title: PrimaryColor.BlueBerry,
    color: '#283C6A',
  },
  {
    title: PrimaryColor.Eggplant,
    color: '#71225B',
  },
  {
    title: PrimaryColor.Tomato,
    color: '#ff6347',
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

    const toggleCn = classNames('sandwich_navigationBar_themeToggle', {
      'sandwich_navigationBar_themeToggle--checked': isDarkModeActive,
    });
    const indicatorCn = classNames('sandwich_navigationBar_themeToggleIndicator', {
      'sandwich_navigationBar_themeToggleIndicator--checked': isDarkModeActive,
    });

    return (
      <div
        className="sandwich_navigationBar_sandwich_navigationBar"
        tabIndex={1}
      >
        <PaletteIcon />
        <div className="sandwich_navigationBar_sandwich_navigationBarContentWrapper">
          <div className="sandwich_navigationBar_sandwich_navigationBarContent">
            <div onClick={this.toggleTheme} className="sandwich_navigationBar_themeToggleWrapper">
              <SunIcon />
              <div className={toggleCn}>
                <div className={indicatorCn} />
              </div>
              <MoonIcon />
            </div>
            <div>
              {colors.map((sandwich_navigationBar) => {
                const cn = classNames('sandwich_navigationBar_sandwich_navigationBarColorPicker', {
                  'sandwich_navigationBar_sandwich_navigationBarColorPicker--selected': currentColor === sandwich_navigationBar.title,
                });

                return (
                  <div
                    className={cn}
                    key={sandwich_navigationBar.title + sandwich_navigationBar.color}
                    style={{ backgroundColor: sandwich_navigationBar.color }}
                    onClick={() => this.changePrimaryColor(sandwich_navigationBar.title)}
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
