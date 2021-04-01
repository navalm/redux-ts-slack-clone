import {DefaultTheme} from './default-theme';

const Theme: DefaultTheme = {
  layout: {
    slackPurple: '#4A144B',
    slackPurpleLight: '#7B567C',
    slackPurpleDark: '#350D36',
    success: '#25AE8F',
    backgroundColor: `#FFFFFF`,
    sidebarColor: '#a3a3a3',
    primaryColor: `#e01f3d`,
    linkColor: `#111111`,
    dark2Gray: '#0E0E10',
    dark1Gray: '#201F24',
    dark0Gray: '#AAAAAA',
    light2Gray: '#D9D9D9',
    light1Gray: '#F6F6F6',
    light0Gray: '#FFFFFF'
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `892px`,
    xl: `1000px`,
  },
  fonts: {
    base: `Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif`,
    buttonSize: '1rem',
    headerSize: '300%',
    size: '81.4%'
  },
  components: {
    container: {
      padding: `0 0.5rem`,
    },
    header: {
      height: `50rem`,
      background: `url('https://cdn.fues.us/')`,
    },
  },
};

export default Theme