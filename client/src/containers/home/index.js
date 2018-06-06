import React, {Component} from "react";
import {reduxForm, formValueSelector} from "redux-form";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import autobind from "class-autobind";
import images from "../../themes/images/";
import {resource} from "../../modules/resource";
import Moment from "react-moment";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "semantic-ui-css/semantic.min.css";
import "react-select/dist/react-select.css";
import ScrollableAnchor from "react-scrollable-anchor";
import {goToTop} from "react-scrollable-anchor";
import FadeIn from 'react-fade-in';

var striptags = require("striptags");
const DROPDOWN_OPTIONS = require("../../modules/dropdowns");

class Home extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      error: false,
      err: null,
      language: "en",
      articles: [],
      newsSource: [],
      currentSource: "",
      currentSourceName: "",
      currentCategory: "",
      searchString: "",
      newsSourceUrl: "",
      values: []
    };
  }

  fetchTopHeadlines = async() => {
    try {
      this.fetchSources("start");
      this.setState({currentCategory: "", currentSourceName: "", currentSource: ""});

      const res = await fetch(`${uribase}v2/top-headlines?language=en&apiKey=${apiKey}`);
      const data = await res.json();
      this.setState({articles: data.articles});
    } catch (e) {
      this.setState({err: e.message});
    }
  };

  fetchSources = async(cat = "") => {
    if (cat === "all") {
      cat = "";
    }
    try {
      const res = await fetch(`${uribase}v1/sources?language=en&category=${cat}&apiKey=${apiKey}`);
      const newsSource = await res.json();
      this.setState({newsSource: newsSource.sources});
    } catch (e) {
      this.setState({err: e.message});
    }
  };

  fetchArticles = async(src, name = "", cat = "") => {

    try {
      this.setState({articles: [], currentSource: src, currentSourceName: "", newsSourceUrl: ""});
      const res = await fetch(`${uribase}v1/articles?source=${src}&category=${cat}&apiKey=${apiKey}`);
      const data = await res.json();
      this.setState({articles: data.articles, newsSourceUrl: cat, currentSourceName: name});
    } catch (e) {
      this.setState({err: e.message});
    }
  };

  fetchSearch = async() => {
    try {
      const res = await fetch(`${uribase}v2/everything?q=${this.state.searchString}&language=en&apiKey=${apiKey}`);
      const data = await res.json();
      this.setState({articles: data.articles});
    } catch (e) {
      this.setState({err: e.message});
    }
  };

  handleSourceChange = value => {
    this.setState({newsSource: []});
    this.fetchSources(value);
  };

  handleSearchChange = e => {
    this.setState({searchString: e.target.value});
  };

  handleSearchButton = () => {
    this.fetchSearch();
  };

  _handleSearchKeyPress = e => {
    console.log(e.target.value);
    if (e.target.value) {
      if (e.key === "Enter") {
        e.preventDefault();
        this.setState({searchString: e.target.value});
        this.handleSearchButton();
      }
    }
  };

  componentDidMount() {
    this.fetchSources("start");
    this.fetchTopHeadlines();
  }

  onSubmit(values, dispatch) {}

  handleSelectChange(value) {
    this.setState({value});
  }

  sourceClicked = (id, name, url) => () => {
    this.setState({articles: [], currentSource: "", currentSourceName: "", newsSourceUrl: ""});
    this.fetchArticles(id, name, url);
  };

  categoryClicked = e => {
    this.fetchSources(e.target.value);
    this.setState({currentCategory: e.target.value});
  };

  NewsCategoryMenu = () => {
    return (
      <div className="category-menu">

        {DROPDOWN_OPTIONS
          .CATEGORY
          .map((cat, index) => (
            <button
              className={cat.label === this.state.currentCategory
              ? "category-menu-item-selected"
              : "category-menu-item"}
              key={cat.label}
              onClick={this.categoryClicked}
              value={cat.value}>
              {cat.label}
            </button>
          ))}
      </div>
    );
  };

  TitleHeader = () => {
    var divStyle = {
      backgroundImage: "url(" + images.background + ")",
      height: "115px",
      backgroundSize: "inherit",
      borderBottom: "solid 1px #aaa",
      backgroundRepeat: "repeat",
      display: "inline-block",
      width: "100%"
    };

    const dateToFormat = new Date();

    return (
      <div style={divStyle}>
        <div className="sitedate">
          <Moment format="dddd, MMMM D, YYYY">{dateToFormat}</Moment>
        </div>

        <div className="page-header">
          <div onClick={this.fetchTopHeadlines} className="title">
            {resource.PB_FORM_TITLE}
          </div>
          <div className="subtitle">
            <span className="subtitleSec">
              {resource.PB_FORM_SUBTITLE}
            </span>

            <span className="search-wrapper ">

              <input 
                type="search"
                name="search"
                className="search-box"
                placeholder="Enter search term"
                onChange={this.handleSearchChange}
                onKeyPress={this._handleSearchKeyPress}/>
              <button className="close-icon" type="reset"></button>

            </span>

          </div>
        </div>
      </div>
    );
  };

  NewsSourceMenu = () => {
    const {newsSource, currentSourceName, newsSourceUrl} = this.state;

    return (
      <Carousel
        axis="horizontal"
        emulateTouch={true}
        dynamicHeight={false}
        width="100%"
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        stopOnHover={true}
        verticalSwipe="natural"
        swipeScrollTolerance={5}
        centerMode={false}
        showThumbs={false}>
        <FadeIn>
          <div className="source-menu-item">
            {newsSource.map((source, index) => (
              <span
                key={index}
                className={source.id === this.state.currentSource
                ? "source-menu-item-selected"
                : "source-menu-item"}
                onClick={this.sourceClicked(source.id, source.name, source.url)}>
                <img
                  className="source-menu-item-icon"
                  alt={source.name}
                  src={`https://besticon-demo.herokuapp.com/icon?url=${source.url}&size=70..120..200`}/> {source.name}
              </span>
            ))}

            <ScrollableAnchor id={"article-section"}>
              <div className="source-title" onClick={goToTop()}>
                {} < img className = "title-icon"
              alt = {
                currentSourceName}
                src={`https://besticon-demo.herokuapp.com/icon?url=${newsSourceUrl}&size=70..120..200`}/> {currentSourceName}

                <a className="gotop" onClick={goToTop}>
                  gotop
                </a>
              </div>
            </ScrollableAnchor>
          </div>
        </FadeIn>
      </Carousel>
    );
  };

  NewsArticles = articles => {
    return (
      <FadeIn>
        <div className="slideContainer">
          {articles.map((article, index) => article.title
            ? (
              <span key={index} className="slide">
                <div className="article">
                  <a target="_blank" title={article.title} href={striptags(article.url)}>
                    <img alt={article.title} src={article.urlToImage || images.imagePlaceholder}/>
                    <div className="article-title">
                      {striptags(article.title)}
                    </div>
                  </a>
                  <div className="article-author">{article.author}</div>
                  <div className="article-description">
                    {article.description}
                    &nbsp;
                    <a  target="_blank" className="nobreak" href={article.url}>
                      Read Full Article
                    </a>
                  </div>
                </div>
              </span>
            )
            : null)}
        </div>
      </FadeIn>
    );
  };

  render(props) {
    const {articles, newsSource, err} = this.state;
    const {handleSubmit, submitting} = this.props;

    return (
      <div className="mainContainer">
        <form  onSubmit={handleSubmit(this.onSubmit.bind(this))} disabled={submitting}>
          <div className="error">{err}</div>
          <div>{this.TitleHeader()}</div>

          <div className="dropdownContainer">
            <div>{this.NewsCategoryMenu()}</div>
          </div>

          <div className="source-menu-container">
            {newsSource.length
              ? (
                <div>{this.NewsSourceMenu(newsSource)}</div>
              )
              : null}

            {articles.length
              ? <div>{this.NewsArticles(articles)}</div>
              : null}
          </div>
        </form>
      </div>
    );
  }
}

const apiKey = "136cf7cda34f439c9fe7d42e919650d1";
const uribase = "https://newsapi.org/";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push("/about")
}, dispatch);

const Form = reduxForm({form: "HForm", destroyOnUnmount: false})(Home);

const selector = formValueSelector("HForm");

export default connect(state => {
  const searchText = selector(state, "search");
  return {searchText};
}, mapStateToProps, mapDispatchToProps)(Form);
