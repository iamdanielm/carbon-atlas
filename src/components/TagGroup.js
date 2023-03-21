import '@spectrum-web-components/tags/sp-tag.js';
import '@spectrum-web-components/tags/sp-tags.js';
import '@spectrum-web-components/icon/sp-icon.js';
import '@spectrum-web-components/avatar/sp-avatar.js';
import '@spectrum-web-components/theme/src/themes.js';
import '@spectrum-web-components/theme/sp-theme.js';

const TagGroup = () => {
    return <sp-theme scale="large" color="dark" slot="content-area">
        <sp-tags>
            <sp-tag>
                Tag 1
                <sp-avatar
                    slot="avatar"
                    label="Tag 1"
                    src="https://place.dog/500/500"
                ></sp-avatar>
            </sp-tag>
            <sp-tag invalid>
                Tag 2
                <sp-avatar
                    slot="avatar"
                    label="Tag 1"
                    src="https://place.dog/500/500"
                ></sp-avatar>
            </sp-tag>
            <sp-tag disabled>
                Tag 3
                <sp-avatar
                    slot="avatar"
                    label="Tag 1"
                    src="https://place.dog/500/500"
                ></sp-avatar>
            </sp-tag>
        </sp-tags>
    </sp-theme>
}

export default TagGroup