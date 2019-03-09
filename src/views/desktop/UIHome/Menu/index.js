import States from 'core/States';
import * as pages from 'core/pages';
import { createDOM } from 'utils/dom';
import { visible } from 'core/decorators';
import { autobind } from 'core-decorators';
import template from './menu.tpl.html';
import './menu.scss';


@visible()
export default class DesktopNetworksView {
  constructor(options) {
    this._el = options.parent.appendChild(
      createDOM(template()),
    );

    this._ui = {
      works: this._el.querySelector('.js-UIHome__menuWorks'),
      experiments: this._el.querySelector('.js-UIHome__menuExperiments'),
      team: this._el.querySelector('.js-UIHome__menuTeams'),
      toys: this._el.querySelector('.js-UIHome__menuToys'),
    };

    this._addEvents();
  }

  _addEvents() {
    this._ui.works.addEventListener('click', this._onWorksClick);
    this._ui.experiments.addEventListener('click', this._onExperimentsClick);
    this._ui.team.addEventListener('click', this._onTeamClick);
    this._ui.toys.addEventListener('click', this._onToysClick);
    
    Signals.onApplicationStart.add(this._start);
  }

  // State ---------------------------------------------------------------------

  show() {
    this._el.style.display = 'block';
  }

  hide() {
    this._el.style.display = 'none';
  }

  @autobind
  _start() {
    if (States.router.getLastRouteResolved().name === 'experiment') {
      this._ui.works.classList.remove('is-active');
      this._ui.experiments.classList.add('is-active');
      this._ui.team.classList.remove('is-active');
      this._ui.toys.classList.remove('is-active');
    }
    else if (States.router.getLastRouteResolved().name === 'team') {
      this._ui.works.classList.remove('is-active');
      this._ui.experiments.classList.remove('is-active');
      this._ui.team.classList.add('is-active');
      this._ui.toys.classList.remove('is-active');
    }
    else if (States.router.getLastRouteResolved().name === 'toys') {
      this._ui.works.classList.remove('is-active');
      this._ui.experiments.classList.remove('is-active');
      this._ui.team.classList.remove('is-active');
      this._ui.toys.classList.add('is-active');
    }
    else {
      this._ui.works.classList.add('is-active');
      this._ui.experiments.classList.remove('is-active');
      this._ui.team.classList.remove('is-active');
      this._ui.toys.classList.remove('is-active');
    }
  }

  updateState(page) {
    switch (page) {
      case pages.HOME:
        this._ui.works.classList.add('is-active');
        this._ui.experiments.classList.remove('is-active');
        this._ui.team.classList.remove('is-active');
        this._ui.toys.classList.remove('is-active');
        break;
      case pages.EXPERIMENT:
        this._ui.works.classList.remove('is-active');
        this._ui.experiments.classList.add('is-active');
        this._ui.team.classList.remove('is-active');
        this._ui.toys.classList.remove('is-active');
        break;
      case pages.TEAM:
        this._ui.works.classList.remove('is-active');
        this._ui.experiments.classList.remove('is-active');
        this._ui.team.classList.add('is-active');
        this._ui.toys.classList.remove('is-active');
        break;
      case pages.TOYS:
        this._ui.works.classList.remove('is-active');
        this._ui.experiments.classList.remove('is-active');
        this._ui.team.classList.remove('is-active');
        this._ui.toys.classList.add('is-active');
        break;
      default:
    }
  }

  // Events ------------------------------------

  @autobind
  _onWorksClick() {
    States.router.navigateTo(pages.HOME);
  }

  @autobind
  _onExperimentsClick() {
    States.router.navigateTo(pages.EXPERIMENT);
  }

  @autobind
  _onTeamClick() {
    States.router.navigateTo(pages.TEAM);
  }

  @autobind
  _onToysClick() {
    States.router.navigateTo(pages.TOYS);
  }
}
