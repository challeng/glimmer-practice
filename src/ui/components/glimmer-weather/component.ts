import Component, {tracked} from "@glimmer/component";

export default class GlimmerWeather extends Component {
  @tracked temp = 50;

  constructor(options) {
    super(options);
    this.loadWeather();
  }

  loadWeather() {
     setInterval(() => { this.temp = this.temp + 1 }, 500)
  }
}
