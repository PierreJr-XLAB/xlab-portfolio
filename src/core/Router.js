import { autobind } from 'core-decorators';
import * as pages from 'core/pages';
import Navigo from 'navigo';

export default class Router {

  // Setup ---------------------------------------------------------------------

  constructor(options) {
    this.updatePageCallback = options.updatePageCallback;
    this._assetsLoaded = false;

    this._page = 0;
    this._initial = false;

    this._setupRouter();
    this._setupEvents();
  }

  _setupRouter() {
    const root = `${window.location.protocol}//${window.location.host}`;
    const useHash = false;
    this.navigo = new Navigo(root, useHash);

    this.navigo.notFound(this._onRouteNotFound);
    this.navigo.on({
      '/': { as: pages.HOME, uses: this._onRouteHome },
      '/experiment': { as: pages.EXPERIMENT, uses: this._onRouteExperiment },
      '/team': { as: pages.TEAM, uses: this._onRouteTeam },
      '/toys': { as: pages.TOYS, uses: this._onRouteToys },
      '/about': { as: pages.ABOUT, uses: this._onRouteAbout },
      '/project/:id': { as: pages.PROJECT, uses: this._onRouteProject },
    });
  }

  _setupEvents() {
    Signals.onAssetsLoaded.add(this._onAssetsLoaded);
  }

  // State ---------------------------------------------------------------------

  navigateTo(id, options = {}) {
    this.navigo.navigate(this.navigo.generate(id, options));
    if (id === 'home') {
      this._page = 0;
    } else if (id === 'experiment') {
      this._page = 1;
    } else if (id === 'team') {
      this._page = 2;
    } else {
      this._page = 3;
    }
  }

  navigateToPage(idx) {
    if (idx === 0) {
      this.navigateTo(pages.HOME);
    } else if (idx === 1) {
      this.navigateTo(pages.EXPERIMENT);
    } else if (idx === 2) {
      this.navigateTo(pages.TEAM);
    } else {
      this.navigateTo(pages.TOYS);
    }
  }

  getLastRouteResolved() {
    const lastRouteResolved = this.navigo.lastRouteResolved();

    // Assign page number on initial load
    if (!this._initial) {
      if (lastRouteResolved.url === "") {
        this._page = 0;
      }
      else if (lastRouteResolved.name === "experiment") {
        this._page = 1;
      }
      else if (lastRouteResolved.name === "team") {
        this._page = 2;
      }
      else {
        this._page = 3;
      }
      this._initial = true
    }

    if (!lastRouteResolved.params) {
      lastRouteResolved.params = null;
    }
    return lastRouteResolved;
  }

  goToNextPage() {
    this._page++;
    if (this._page > 3) {
      this._page = 3;
    }
    this.navigateToPage(this._page);
  }

  goToPrevPage() {
    this._page--;
    if (this._page < 0) {
      this._page = 0;
    }
    this.navigateToPage(this._page);
  }

  // Events --------------------------------------------------------------------

  @autobind
  _onAssetsLoaded() {
    this._assetsLoaded = true;
  }

  @autobind
  _onRouteNotFound() {
    this.updatePageCallback(pages.HOME);
  }

  @autobind
  _onRouteHome() {
    this.updatePageCallback(pages.HOME);
  }

  @autobind
  _onRouteExperiment() {
    this.updatePageCallback(pages.EXPERIMENT);
  }

  @autobind
  _onRouteTeam() {
    this.updatePageCallback(pages.TEAM);
  }

  @autobind
  _onRouteToys() {
    this.updatePageCallback(pages.TOYS);
  }

  @autobind
  _onRouteAbout() {
    this.updatePageCallback(pages.ABOUT);
  }

  @autobind
  _onRouteProject() {
    this.updatePageCallback(pages.PROJECT);
  }

}
