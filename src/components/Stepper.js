import "@cision/atlas-components"
import "carbon-web-components/es/components/progress-indicator/index.js";

const Stepper = () => {

	return <bx-progress-indicator slot="content-area">
		<bx-progress-step label-text="Invalid" secondary-label-text="Secondary label" state="invalid"></bx-progress-step>
		<bx-progress-step label-text="Complete" secondary-label-text="Secondary label" state="complete"></bx-progress-step>
		<bx-progress-step label-text="Current" secondary-label-text="Secondary label" state="current"></bx-progress-step>
		<bx-progress-step disabled label-text="Disabled" secondary-label-text="Secondary label"></bx-progress-step>
		<bx-progress-step label-text="No State" secondary-label-text="Secondary label"></bx-progress-step>
	</bx-progress-indicator>
}

export default Stepper