import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'fontFamily': '"AvenirRegular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'backgroundColor': '#fdfcfd',
    'color': '#000'
  },
  'body': {
    'fontFamily': '"AvenirRegular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'backgroundColor': '#fdfcfd',
    'color': '#000'
  },
  'a': {
    'color': 'rgb(0, 0, 0)'
  },
  'a:hover': {
    'color': '#b50610'
  },
  '#root': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'mainContainer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'contentContainer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }]
  },
  'contentContainer>h1': {
    'color': '#928f8e'
  },
  'title': {
    'letterSpacing': [{ 'unit': 'px', 'value': 5 }]
  },
  'subtitle': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'screen&&<w514': {
      'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
    }
  },
  'article': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'article a>img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'article div': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'article-author': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#aaa'
  },
  'article-description': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.3 }],
    'fontWeight': '400',
    'fontStyle': 'normal',
    'color': '#666'
  },
  'current-source': {
    'float': 'right',
    'fontSize': [{ 'unit': 'em', 'value': 2 }]
  },
  'button': {
    'height': [{ 'unit': 'px', 'value': 28 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.1 }],
    'backgroundImage': 'none',
    'backgroundColor': '#3d3935',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#402b2e' }],
    'borderRadius': '4px',
    'color': '#fff',
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'rem', 'value': 0.9 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -2 }]
  },
  'source-menu-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 150 }, { 'unit': 'string', 'value': '!important' }]
  },
  'source-menu-item': {
    'paddingBottom': [{ 'unit': 'px', 'value': 17 }],
    'textAlign': 'left'
  },
  'source-menu-item img': {
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'source-menu-item span': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'display': 'inline-table',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'backgroundColor': 'rgba(133, 126, 133, 0.6)',
    'color': 'rgba(15, 1, 15, 0.8)',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 43 }, { 'unit': 'px', 'value': -4 }, { 'unit': 'string', 'value': 'rgba(133, 126, 133, 1)' }]
  },
  'source-menu-item span:hover': {
    'backgroundColor': 'rgba(181, 6, 16, 0.5)',
    'color': '#fff'
  },
  'source-menu-item-selected': {
    'backgroundColor': 'rgba(181, 6, 16, 0.7) !important',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#fff !important'
  },
  'byline': {
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'fontWeight': '400',
    'fontStyle': 'normal',
    'color': '#999'
  },
  '#routemenu header': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'success': {
    'color': '#00943b',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'error': {
    'color': '#b50610',
    'fontStyle': 'normal'
  },
  'x#routemenu header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#f5f5f5'
  },
  '#routemenu header span a': {
    'fontFamily': '"AvenirRegular", Lato, Helvetica',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#a7a7a7'
  },
  'page-header': {
    'zIndex': '1000',
    'color': '#000',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 15 }]
  },
  'page-header title': {
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': 5 }]
  },
  'page-header subtitleSec': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'borderRadius': '25px',
    'position': 'relative',
    'fontStyle': 'italic',
    'top': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }],
    'color': 'rgba(181, 6, 16, 0.9)',
    'backgroundColor': 'rgba(255, 255, 255, 0.7)'
  },
  'dropdown': {
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 43 }, { 'unit': 'px', 'value': -4 }, { 'unit': 'string', 'value': 'rgba(133, 126, 133, 1)' }],
    'borderRadius': '3px'
  },
  'dropdownContainer': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'source-title': {
    'color': '#b50610',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 3 }],
    'fontWeight': '600',
    'textAlign': 'center'
  },
  'agotop': {
    'float': 'right',
    'background': 'transparent',
    'fontSize': [{ 'unit': 'px', 'value': 8 }],
    'color': '#b50610 !important',
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'form-header spanicon': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'color': '#fff',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  'slideContainer': {
    'overflowX': 'scroll',
    'whiteSpace': 'wrap',
    'boxShadow': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 43 }, { 'unit': 'px', 'value': -4 }, { 'unit': 'string', 'value': 'rgba(133, 126, 133, 1)' }],
    'borderRadius': '3px',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'slide': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'whiteSpace': 'normal',
    'verticalAlign': 'top'
  },
  'sitedate': {
    'fontFamily': '"Courier New", Courier, monospace',
    'letterSpacing': [{ 'unit': 'px', 'value': 4 }],
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }],
    'fontWeight': '550',
    'color': '#b50610'
  },
  'anobreak': {
    'display': 'inline-block',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'color': '#b50610',
    'textDecoration': 'underline'
  },
  'search-box': {
    'position': 'relative',
    'float': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'search-box button': {
    'height': [{ 'unit': 'px', 'value': 28 }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.1 }],
    'backgroundImage': 'none',
    'backgroundColor': '#3d3935',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#402b2e' }],
    'borderRadius': '4px',
    'color': '#fff',
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'rem', 'value': 0.9 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -2 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 23 }],
    'outlineStyle': 'none'
  },
  'search-box input': {
    'color': 'rgba(181,6,16, 1)',
    'top': [{ 'unit': 'px', 'value': -3 }],
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 170 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'fontWeight': 'bold',
    'marginRight': [{ 'unit': 'px', 'value': 7 }],
    'backgroundColor': '#fff',
    'outlineStyle': 'none',
    'paddingLeft': [{ 'unit': 'px', 'value': 3 }]
  },
  '::placeholder': {
    'color': '#aaa',
    'opacity': '.8',
    'fontWeight': 'normal'
  },
  ':-ms-input-placeholder': {
    // Internet Explorer 10-11
    'color': '#b50610'
  },
  '::-ms-input-placeholder': {
    // Microsoft Edge
    'color': '#b50610'
  },
  'carousel slider-wrapperaxis-horizontal slider slide': {
    'MsFlexDirection': 'column',
    'flexDirection': 'column',
    'MsFlexFlow': 'column',
    'flexFlow': 'column',
    'backgroundColor': 'transparent'
  },
  // category main menu
  'category-menu-item-selected': {
    'backgroundColor': 'rgba(22, 2, 2, .7) !important',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'color': 'rgb(238, 228, 228) !important'
  },
  'category-menu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'backgroundColor': 'rgba(133, 126, 133, 0.3)',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'display': 'inline-block',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(22, 2, 2, .2)' }]
  },
  'category-menu button': {
    'letterSpacing': [{ 'unit': 'em', 'value': 0.1 }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'color': 'rgba(15, 1, 15, 0.8)',
    'letterSpacing': [{ 'unit': 'px', 'value': 2.36 }],
    'outline': 'none',
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'category-menu button:hover': {
    'backgroundColor': 'rgba(15, 1, 15, 0.6)',
    'color': '#fff'
  },
  // media queries
});
