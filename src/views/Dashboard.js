import "@cision/atlas-components"
import Stepper from "../components/Stepper"

const Dashboard = () => {
	return <atlas-application-frame>
			<atlas-logo beta slot="app-logo"></atlas-logo>

			<atlas-main-nav slot="main-nav">
				<atlas-main-nav-item>
					<atlas-button kind="icon">
						<atlas-icon name="home" />
					</atlas-button>
				</atlas-main-nav-item>
				<atlas-main-nav-item>
					<atlas-button kind="icon">
						<atlas-icon name="university" />
					</atlas-button>
				</atlas-main-nav-item>
				<atlas-main-nav-item>
					<atlas-button kind="icon">
						<atlas-icon name="marketPlace" />
					</atlas-button>
				</atlas-main-nav-item>
				<atlas-main-nav-item>
					<atlas-button kind="icon">
						<atlas-icon name="mail" />
					</atlas-button>
				</atlas-main-nav-item>
				<atlas-main-nav-item>
					<atlas-button kind="icon">
						<atlas-icon name="logout" />
					</atlas-button>
				</atlas-main-nav-item>
			</atlas-main-nav>

			<atlas-profile-control slot="profile-controls">
				<atlas-avatar slot="image" src="/cheems.jpg" />
				<p slot="name">Good morning, Mishi Wasi</p>
			</atlas-profile-control>

			<atlas-button-set slot="contextual-controls">
				<atlas-button kind="icon">
					<atlas-icon name="sidebar" />
				</atlas-button>
			</atlas-button-set>

			<atlas-feed slot="feed"></atlas-feed>

			<Stepper></Stepper>

		</atlas-application-frame>
}

export default Dashboard