import AeonElement from './aeon.js';

class Year extends AeonElement {
  static get props() {
    return {
      value: {
        type: Number
      },
      years: {
        type: Array
      }
    };
  }

  constructor() {
    super();

    this.years = [];
  }

  firstRender(_) {
    _.innerHTML = `
      <style>
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          padding: 0.5rem;
          padding-right: 1.5rem;
          font-family: inherit;
          font-size: 0.8rem;
          border-radius: 0;
          border-color: var(--hintColor);
          background-color: transparent;
          color: var(--color);
          width: 100%;
        }

        .select {
          position: relative;
        }

        .select .indicator {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0.2rem;
          pointer-events: none;
          display: flex;
          align-items: center;
        }
      </style>

      <div class="select">
        <select id="year">
        </select>
        <span class="indicator">
          <svg width="24" height="24">
            <g><path fill="currentColor" d="M7 10l5 5 5-5z"></path></g>
          </svg>
        </span>
      </div>
    `;
  }

  firstRendered() {
    this.$.year.addEventListener('change', event => {
      this.value = event.target.value;
    });
  }

  render(_, triggers) {
    if ('value' in triggers) {
      this.dispatchEvent(
        new Event('change', {
          bubbles: true
        })
      );
    }

    this.$.year.innerHTML = this.years
      .map(year => `<option value="${year}">${year}</option>`)
      .join('');

    this.$.year.value = this.value;
  }
}

export default Year;