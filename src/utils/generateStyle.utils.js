import { COLORS } from '../Theme/color';

import { OnTypes } from '../Constants/style.constants';

export function GenerateTextComponentStyle({ on, shade, size }) {
    const generatedStyle = {};

    if (on && typeof on == 'string') {
        switch (on) {
            case OnTypes.Primary:
                generatedStyle.color = COLORS.ON_PRIMARY;
                break;
            case OnTypes.Secondary:
                generatedStyle.color = COLORS.ON_SECONDARY;
                break;
            case OnTypes.Background:
                generatedStyle.color = COLORS.ON_BACKGROUND.NORMAL;
                break;
            case OnTypes.Surface:
                generatedStyle.color = COLORS.ON_SURFACE.NORMAL;
            default:
                generatedStyle.color = COLORS.ON_SURFACE.NORMAL;
        }
    }
}