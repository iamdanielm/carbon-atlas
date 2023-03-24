import "@ui5/webcomponents/dist/AvatarGroup"
import "@ui5/webcomponents/dist/Avatar"
import "@ui5/webcomponents/dist/MultiComboBox"
import "@ui5/webcomponents/dist/MultiComboBoxItem"
import "@ui5/webcomponents/dist/MultiComboBoxGroupItem"
import "@ui5/webcomponents/dist/Badge"
import "@ui5/webcomponents/dist/Select"
import "@ui5/webcomponents/dist/Option"
import "@ui5/webcomponents/dist/Icon"
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/locked.js"


import "@cision/atlas-components"
import "./ContentArea.css"

const ContentArea = () => {
    return <section slot="content-area" id="content-area">
        <atlas-tile-board id="ui5-showcase">
            <atlas-tile-board-tile>
                <ui5-avatar-group type="Group" >
                    <ui5-avatar icon="employee"></ui5-avatar>
                    <ui5-avatar initials="JD"></ui5-avatar>
                    <ui5-avatar>
                        <img src="/carpincho.jpg" alt="carpincho" />
                    </ui5-avatar>
                    {/* Weird behaviour when using non-ui5 elements*/}
                    {/* <atlas-avatar initials="MW" /> */}
                </ui5-avatar-group>
            </atlas-tile-board-tile>

            <atlas-tile-board-tile id="ui5-badge">
                <ui5-badge color-scheme="1">🙈🙉🙊</ui5-badge>
                <ui5-badge color-scheme="1">🥕👞</ui5-badge>
                <ui5-badge color-scheme="8">
                    <ui5-icon name="locked" slot="icon"></ui5-icon>
                </ui5-badge>
                
            </atlas-tile-board-tile>

            <atlas-tile-board-tile>
                <ui5-select class="select">
                    <ui5-option icon="iphone">Phone</ui5-option>
                    <ui5-option icon="ipad">Tablet</ui5-option>
                    <ui5-option icon="laptop" selected>Desktop</ui5-option>
                </ui5-select>
            </atlas-tile-board-tile>

            <atlas-tile-board-tile>
                {/* Can't include items  */}
                <ui5-multi-combobox placeholder="Type your value">
                    <ui5-mcb-item selected text="🥔 Potato"></ui5-mcb-item>
                    <ui5-mcb-item text="🍎 Apple"></ui5-mcb-item>
                    <ui5-mcb-item text="🍌 Banana"></ui5-mcb-item>
                    <ui5-mcb-item text="🍏 Green Apple"></ui5-mcb-item>
                </ui5-multi-combobox>
            </atlas-tile-board-tile>

        </atlas-tile-board>

        <atlas-tile-board id="atlas-showcase">
            <atlas-tile-board-tile>
                <div className="atlas-avatar-group">
                    <atlas-avatar src="/viscacha.jpg" />
                    <atlas-avatar initials="MW" />
                    <atlas-avatar>
                        <img src="/alpaca.jpg" alt="alpaca" />
                    </atlas-avatar>
                </div>
            </atlas-tile-board-tile>

            <atlas-tile-board-tile>
                <atlas-dropdown open id="dropdown-atlas">
                    <atlas-input-text slot="input">
                        <span slot="label">Pick a fruit</span>
                    </atlas-input-text>
                    <ul slot="menu">
                        <li>🍎 Apple</li>
                        <li>🍌 Banana</li>
                        <li>🥔 Potato</li>
                        <li>🍏 Green Apple</li>
                    </ul>
                </atlas-dropdown>
            </atlas-tile-board-tile>

            <atlas-tile-board-tile>
                <atlas-chip>
                    <h4>🙈🙉🙊</h4>
                    <h6 slot="prefix">12</h6>
                </atlas-chip>
                <atlas-chip>
                    <h6 slot="prefix">🥕👞</h6>
                    <h1 slot="suffix">Felipe</h1>
                </atlas-chip>
                <atlas-chip>
                    <atlas-icon icon="search"/>
                </atlas-chip>
            </atlas-tile-board-tile>
        </atlas-tile-board>
    </section>
}

export default ContentArea
