import './App.css';

function App() {
  return (
    <atlas-application-frame backdrop>
      <h1 slot="app-logo">Atlas-Carbon</h1>
      <atlas-dialog slot="backdrop" open blade>
        <h1 slot="title">Create a new Query</h1>
        <atlas-icon name="close" slot="dismissible"></atlas-icon>
        <form className="atlas-form">
          <atlas-input-text required>
            <span slot="label">Full Name</span>
          </atlas-input-text>

          <atlas-input-text required>
            <span slot="label">Job Title</span>
          </atlas-input-text>

          <atlas-input-text required>
            <span slot="label">Media/News Outlet</span>
          </atlas-input-text>

          <atlas-input-text>
            <span slot="label">Geography</span>
          </atlas-input-text>


          <atlas-input-text>
            <span slot="label">Email address</span>
            <p slot="helperText">Preferred email address you’d like to receive the response to</p>
          </atlas-input-text>

          <atlas-checkbox>
            <span slot="label">Remain anonymous 🛈</span>
          </atlas-checkbox>

          <atlas-input-text class="colspan" required>
            <span slot="label">Query Title</span>
          </atlas-input-text>

          <atlas-input-textarea class="colspan" placeholder="Enter details about your query" required>
            <span slot="label">Query Description</span>
          </atlas-input-textarea>

          <bx-date-picker>
            <bx-date-picker-input size="lg" kind="single" label-text="Deadline"> </bx-date-picker-input>
          </bx-date-picker>

          <atlas-input-chip-group class="colspan">
            <span slot="label">Select topics that relate to this query</span>
            <atlas-chip-group category="topics">
              <atlas-chip>
                Business
                <atlas-button kind="icon" slot="dismisser">
                  <atlas-icon name="close" />
                </atlas-button>
              </atlas-chip>

              <atlas-chip>
                Environment
                <atlas-button kind="icon" slot="dismisser">
                  <atlas-icon name="close" />
                </atlas-button>
              </atlas-chip>
            </atlas-chip-group>
          </atlas-input-chip-group>

        </form>
        <atlas-button-set slot="footer">
          <atlas-button>Submit</atlas-button>
        </atlas-button-set>
      </atlas-dialog>
    </atlas-application-frame>
  );
}

export default App;
