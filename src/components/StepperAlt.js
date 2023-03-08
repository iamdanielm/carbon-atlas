
import { css, customElement } from 'lit-element';
import BXDropdown from 'carbon-web-components/es/components/dropdown/dropdown';

@customElement('my-dropdown')
    class StepperAlt extends BXDropdown {
    // Custom CSS to enforce `field-02` (light) style of the dropdown
    static styles = css`
    ${BXDropdown.styles}
        .bx--list-box {
            background-color: white;
        }
    `;
}

export default StepperAlt